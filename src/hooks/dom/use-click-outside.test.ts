import { renderHook } from '@testing-library/react-hooks';
import { useClickOutside } from './use-click-outside';
import { fireEvent } from '@testing-library/react';

describe('useClickOutside hook', () => {
  it('should call handler when click is outside', () => {
    const handler = jest.fn();
    const { result } = renderHook(() => useClickOutside(handler));
    const element = document.createElement('div');
    result.current.current = element;

    document.body.appendChild(element);
    fireEvent.mouseDown(document);
    expect(handler).toHaveBeenCalled();
    document.body.removeChild(element);
  });

  it('should not call handler when click is inside', () => {
    const handler = jest.fn();
    const { result } = renderHook(() => useClickOutside(handler));
    const element = document.createElement('div');
    result.current.current = element;

    document.body.appendChild(element);
    fireEvent.mouseDown(element);
    expect(handler).not.toHaveBeenCalled();
    document.body.removeChild(element);
  });
});
