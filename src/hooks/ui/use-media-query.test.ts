import { renderHook, act } from '@testing-library/react-hooks';
import { useMediaQuery } from './use-media-query';

describe('useMediaQuery hook', () => {
  it('should return true for matching media query', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 1024px)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(true);
  });

  it('should return false for non-matching media query', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 1023px)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(false);
  });

  it('should update match status on query change', () => {
    let listener: (event: MediaQueryListEvent) => void;
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: query === '(min-width: 1024px)',
        addListener: (l: (event: MediaQueryListEvent) => void) => {
          listener = l;
        },
        removeListener: jest.fn(),
      };
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(true);

    act(() => {
      listener!({ matches: false } as MediaQueryListEvent);
    });

    expect(result.current).toBe(false);
  });

  it('should remove event listener on unmount', () => {
    const removeListenerMock = jest.fn();
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 1024px)',
      addListener: jest.fn(),
      removeListener: removeListenerMock,
    }));

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    unmount();
    expect(removeListenerMock).toHaveBeenCalled();
  });
});
