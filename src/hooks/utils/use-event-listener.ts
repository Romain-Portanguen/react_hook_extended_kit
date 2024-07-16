import { useEffect, useRef } from 'react';

/**
 * Custom hook to manage event listeners.
 *
 * @param eventName - The event name to listen for.
 * @param handler - The event handler function.
 * @param element - The element to attach the event listener to (defaults to window).
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { useEventListener } from './hooks/utils/use-event-listener';
 *
 * const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
 *   useEventListener('keydown', (event: KeyboardEvent) => {
 *     if (event.key === 'Escape') {
 *       onClose();
 *     }
 *   });
 *
 *   return (
 *     <div className="modal">
 *       <p>Press "Escape" to close this modal.</p>
 *     </div>
 *   );
 * };
 *
 * const App: React.FC = () => {
 *   const [isModalOpen, setModalOpen] = useState(false);
 *
 *   return (
 *     <div>
 *       <button onClick={() => setModalOpen(true)}>Open Modal</button>
 *       {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 */

export const useEventListener = (
  eventName: string,
  handler: (event: Event) => void,
  element: EventTarget = window,
): void => {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: Event) => savedHandler.current?.(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
