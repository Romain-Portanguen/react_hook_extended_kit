import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from '../hooks/use-local-storage';

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default value', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('should update localStorage value', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'default'));
    act(() => {
      result.current[1]('newValue');
    });
    expect(result.current[0]).toBe('newValue');
    expect(localStorage.getItem('key')).toBe(JSON.stringify('newValue'));
  });
});
