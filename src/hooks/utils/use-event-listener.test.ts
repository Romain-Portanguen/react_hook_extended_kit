import { act, renderHook } from '@testing-library/react-hooks';
import { useEventListener } from './use-event-listener';

describe('useEventListener hook', () => {
  it('should call handler when event is triggered', () => {
    const handler = jest.fn();
    renderHook(() => useEventListener('click', handler, window));

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler).toHaveBeenCalled();
  });

  it('should clean up event listener on unmount', () => {
    const handler = jest.fn();
    const { unmount } = renderHook(() =>
      useEventListener('click', handler, window),
    );

    unmount();

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it('should call handler when event is triggered on a specific element', () => {
    const handler = jest.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);

    renderHook(() => useEventListener('click', handler, element));

    act(() => {
      element.dispatchEvent(new Event('click'));
    });

    expect(handler).toHaveBeenCalled();
  });

  it('should update handler when it changes', () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    const { rerender } = renderHook(
      ({ handler }) => useEventListener('click', handler, window),
      {
        initialProps: { handler: handler1 },
      },
    );

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler1).toHaveBeenCalled();
    expect(handler2).not.toHaveBeenCalled();

    rerender({ handler: handler2 });

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler2).toHaveBeenCalled();
  });

  it('should call handler when event is triggered on window by default', () => {
    const handler = jest.fn();
    renderHook(() => useEventListener('resize', handler));

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(handler).toHaveBeenCalled();
  });
});
