import { renderHook } from '@testing-library/react';
import { usePrevious } from './use-previous';

describe('usePrevious hook', () => {
  it('should return undefined on initial render', () => {
    const { result } = renderHook(() => usePrevious(0));
    expect(result.current).toBe(undefined);
  });

  it('should return previous value after update', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 },
    });
    expect(result.current).toBe(undefined);

    rerender({ value: 1 });
    expect(result.current).toBe(0);

    rerender({ value: 2 });
    expect(result.current).toBe(1);
  });

  it('should return previous value for objects', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: { count: 0 } },
    });

    const newValue = { count: 1 };
    rerender({ value: newValue });
    expect(result.current).toEqual({ count: 0 });

    const newerValue = { count: 2 };
    rerender({ value: newerValue });
    expect(result.current).toEqual(newValue);
  });
});
