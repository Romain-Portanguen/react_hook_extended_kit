import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from './use-debounce';

jest.useFakeTimers();

describe('useDebounce hook', () => {
  it('should debounce value', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      },
    );

    expect(result.current).toBe('initial');

    rerender({ value: 'updated', delay: 500 });
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(result.current).toBe('updated');
  });
});
