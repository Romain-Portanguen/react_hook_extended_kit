import { renderHook, act } from '@testing-library/react-hooks';
import { useClipboard } from './use-clipboard';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn().mockResolvedValue(undefined),
    readText: jest.fn().mockResolvedValue('Mock clipboard text'),
  },
});

describe('useClipboard hook', () => {
  it('should copy text to clipboard', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useClipboard());

    act(() => {
      result.current[1]('Test text');
    });

    await waitForNextUpdate();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Test text');
    expect(result.current[0]).toBe('Test text');
  });

  it('should read text from clipboard', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useClipboard());

    act(() => {
      result.current[2]();
    });

    await waitForNextUpdate();
    expect(navigator.clipboard.readText).toHaveBeenCalled();
    expect(result.current[0]).toBe('Mock clipboard text');
  });
});
