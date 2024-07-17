import { renderHook, act } from '@testing-library/react-hooks';
import { useSessionStorage } from './use-session-storage';

describe('useSessionStorage', () => {
  it('should initialize with provided value', () => {
    const { result } = renderHook(() =>
      useSessionStorage('testKey', 'testValue'),
    );

    expect(result.current[0]).toBe('testValue');
  });

  it('should update sessionStorage when value changes', () => {
    const { result } = renderHook(() =>
      useSessionStorage('testKey', 'testValue'),
    );

    act(() => {
      result.current[1]('newValue');
    });

    expect(result.current[0]).toBe('newValue');
    expect(window.sessionStorage.getItem('testKey')).toBe(
      JSON.stringify('newValue'),
    );
  });

  it('should retrieve value from sessionStorage if available', () => {
    window.sessionStorage.setItem('testKey', JSON.stringify('storedValue'));
    const { result } = renderHook(() =>
      useSessionStorage('testKey', 'testValue'),
    );

    expect(result.current[0]).toBe('storedValue');
  });

  it('should handle invalid JSON in sessionStorage gracefully', () => {
    window.sessionStorage.setItem('testKey', 'invalidJSON');
    const { result } = renderHook(() =>
      useSessionStorage('testKey', 'testValue'),
    );

    expect(result.current[0]).toBe('testValue');
  });
});
