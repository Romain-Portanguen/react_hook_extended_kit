import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './use-counter';

describe('useCounter hook', () => {
  it('should initialize with default value 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current[0]).toBe(0);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(1);
  });

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(1));
    act(() => {
      result.current[2]();
    });
    expect(result.current[0]).toBe(0);
  });

  it('should reset counter', () => {
    const { result } = renderHook(() => useCounter(1));
    act(() => {
      result.current[1]();
      result.current[3]();
    });
    expect(result.current[0]).toBe(1);
  });
});
