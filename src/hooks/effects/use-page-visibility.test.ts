import { act, renderHook } from '@testing-library/react-hooks';
import { usePageVisibility } from './use-page-visibility';

describe('usePageVisibility hook', () => {
  it('should return true when page is visible', () => {
    const { result } = renderHook(() => usePageVisibility());
    expect(result.current).toBe(true);
  });

  it('should return false when page is hidden', () => {
    const { result } = renderHook(() => usePageVisibility());

    act(() => {
      Object.defineProperty(document, 'visibilityState', {
        value: 'hidden',
        writable: true,
      });
      document.dispatchEvent(new Event('visibilitychange'));
    });

    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(document, 'visibilityState', {
        value: 'visible',
        writable: true,
      });
      document.dispatchEvent(new Event('visibilitychange'));
    });

    expect(result.current).toBe(true);
  });
});
