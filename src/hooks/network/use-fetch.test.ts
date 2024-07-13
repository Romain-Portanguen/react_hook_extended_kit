import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './use-fetch';

const createMockResponse = (
  data: unknown,
  status: number = 200,
  ok: boolean = true,
): Response => {
  return {
    ok,
    status,
    json: jest.fn().mockResolvedValue(data),
    headers: new Headers(),
    redirected: false,
    statusText: 'OK',
    type: 'basic',
    url: '',
    clone: jest.fn(),
    body: null,
    bodyUsed: false,
    arrayBuffer: jest.fn(),
    blob: jest.fn(),
    formData: jest.fn(),
    text: jest.fn(),
  } as unknown as Response;
};

describe('useFetch hook', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should fetch data', async () => {
    const mockData = { message: 'Hello, world!' };
    (global.fetch as jest.Mock).mockResolvedValue(createMockResponse(mockData));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<typeof mockData>('https://api.example.com/data'),
    );
    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Failed to fetch');
    (global.fetch as jest.Mock).mockRejectedValue(mockError);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://api.example.com/data'),
    );
    await waitForNextUpdate();

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(mockError);
  });

  it('should handle non-200 response', async () => {
    (global.fetch as jest.Mock).mockResolvedValue(
      createMockResponse({}, 404, false),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://api.example.com/data'),
    );
    await waitForNextUpdate();

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error('Error: 404'));
  });
});
