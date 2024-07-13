import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './use-local-storage';

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

  it('should retrieve value from localStorage', () => {
    localStorage.setItem('key', JSON.stringify('storedValue'));
    const { result } = renderHook(() => useLocalStorage('key', 'default'));
    expect(result.current[0]).toBe('storedValue');
  });

  it('should handle errors when accessing localStorage', () => {
    const mockGetItem = jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => {
        throw new Error('Failed to get item');
      });

    const { result } = renderHook(() => useLocalStorage('key', 'default'));
    expect(result.current[0]).toBe('default');

    mockGetItem.mockRestore();
  });

  it('should handle errors when setting localStorage', () => {
    const mockSetItem = jest
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new Error('Failed to set item');
      });

    const { result } = renderHook(() => useLocalStorage('key', 'default'));
    act(() => {
      result.current[1]('newValue');
    });

    expect(result.current[0]).toBe('newValue');
    mockSetItem.mockRestore();
  });
});
