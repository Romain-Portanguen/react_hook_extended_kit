import { renderHook, act } from '@testing-library/react-hooks';
import { useGeolocation } from './use-geolocation';

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
};

beforeAll(() => {
  // @ts-expect-error Description: Mocking global.navigator.geolocation for testing purposes.
  global.navigator.geolocation = mockGeolocation;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('useGeolocation', () => {
  it('should return default state initially', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current).toEqual({
      coords: {
        latitude: null,
        longitude: null,
      },
      timestamp: null,
      error: null,
    });
  });

  it('should update state with position on success', () => {
    const mockPosition = {
      coords: {
        latitude: 51.1,
        longitude: 45.3,
      },
      timestamp: 123456,
    };

    mockGeolocation.watchPosition.mockImplementationOnce((success) => {
      success(mockPosition);
    });

    const { result } = renderHook(() => useGeolocation());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toEqual({
      coords: {
        latitude: 51.1,
        longitude: 45.3,
      },
      timestamp: 123456,
      error: null,
    });
  });

  it('should update state with error on failure', () => {
    const mockError = {
      message: 'User denied Geolocation',
    };

    mockGeolocation.watchPosition.mockImplementationOnce((_, error) => {
      error(mockError);
    });

    const { result } = renderHook(() => useGeolocation());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toEqual({
      coords: {
        latitude: null,
        longitude: null,
      },
      timestamp: null,
      error: 'User denied Geolocation',
    });
  });

  it('should clear watch on unmount', () => {
    const { unmount } = renderHook(() => useGeolocation());

    unmount();

    expect(mockGeolocation.clearWatch).toHaveBeenCalledTimes(1);
  });
});
