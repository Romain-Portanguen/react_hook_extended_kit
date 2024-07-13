import { renderHook } from '@testing-library/react-hooks';
import { useMediaQuery } from '../hooks/use-media-query';

describe('useMediaQuery hook', () => {
  it('should return true for matching media query', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(min-width: 1024px)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(true);
  });

  it('should return false for non-matching media query', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(max-width: 1023px)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(false);
  });
});
