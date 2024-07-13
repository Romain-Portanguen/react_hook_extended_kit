import { renderHook, act } from '@testing-library/react-hooks';
import { useDarkMode } from './use-dark-mode';

describe('useDarkMode hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default value false', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(false);
  });

  it('should toggle dark mode and update localStorage', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('true');

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  it('should read the initial state from localStorage', () => {
    localStorage.setItem('darkMode', 'true');
    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(true);
  });
});
