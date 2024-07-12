import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from '../hooks/use-toggle';

describe('useToggle hook', () => {
  it('should initialize with default value false', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);
  });

  it('should toggle value to true', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

  it('should toggle value back to false', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1]();
    });

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });
});
