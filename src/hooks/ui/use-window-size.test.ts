import { renderHook, act } from '@testing-library/react';
import { useWindowSize } from './use-window-size';

describe('useWindowSize hook', () => {
  it('should return current window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  it('should update window size on resize', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerWidth = 1024;
      window.innerHeight = 768;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });
});
