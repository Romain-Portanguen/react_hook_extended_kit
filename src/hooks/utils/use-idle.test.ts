import { renderHook, act } from '@testing-library/react-hooks';
import { useIdle } from './use-idle';

jest.useFakeTimers();

describe('useIdle', () => {
  it('should be active initially', () => {
    const { result } = renderHook(() => useIdle(3000));

    expect(result.current).toBe(false);
  });

  it('should become idle after timeout', () => {
    const { result } = renderHook(() => useIdle(3000));

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current).toBe(true);
  });

  it('should reset idle timer on activity', () => {
    const { result } = renderHook(() => useIdle(3000));

    act(() => {
      jest.advanceTimersByTime(1500);
      window.dispatchEvent(new Event('mousemove'));
      jest.advanceTimersByTime(1500);
    });

    expect(result.current).toBe(false);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current).toBe(true);
  });

  it('should clean up event listeners on unmount', () => {
    const { unmount } = renderHook(() => useIdle(3000));

    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function),
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    );
  });
});
