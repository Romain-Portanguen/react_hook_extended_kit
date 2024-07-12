import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../hooks/use-fetch';

describe('useFetch hook', () => {
  it('should fetch data', async () => {
    const mockData = { message: 'Hello, world!' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      } as Response),
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://api.example.com/data'));
    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Failed to fetch');
    global.fetch = jest.fn(() => Promise.reject(mockError));

    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://api.example.com/data'));
    await waitForNextUpdate();

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(mockError);
  });
});
