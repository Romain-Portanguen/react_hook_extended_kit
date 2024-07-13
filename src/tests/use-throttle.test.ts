import { renderHook, act } from '@testing-library/react-hooks';
import { useThrottle } from '../hooks/use-throttle';

jest.useFakeTimers();

describe('useThrottle hook', () => {
  it('should throttle value', () => {
    const { result, rerender } = renderHook(({ value, limit }) => useThrottle(value, limit), {
      initialProps: { value: 'initial', limit: 500 },
    });

    expect(result.current).toBe('initial');

    rerender({ value: 'updated', limit: 500 });

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(result.current).toBe('updated');
  });

  it('should update throttled value after limit', () => {
    const { result, rerender } = renderHook(({ value, limit }) => useThrottle(value, limit), {
      initialProps: { value: 'initial', limit: 300 },
    });

    expect(result.current).toBe('initial');

    rerender({ value: 'updated', limit: 300 });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current).toBe('updated');
  });

  it('should handle rapid value changes', () => {
    const { result, rerender } = renderHook(({ value, limit }) => useThrottle(value, limit), {
      initialProps: { value: 'initial', limit: 500 },
    });

    expect(result.current).toBe('initial');

    rerender({ value: 'change1', limit: 500 });
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toBe('initial');

    rerender({ value: 'change2', limit: 500 });
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toBe('initial');

    rerender({ value: 'change3', limit: 500 });
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current).toBe('change3');
  });
});
