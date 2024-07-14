import { useEffect, useRef } from 'react';

/**
 * A custom hook that triggers a callback when a click is detected outside the referenced element.
 *
 * @param handler - The function to call when a click outside is detected.
 * @returns A ref to be attached to the element to detect outside clicks.
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { useClickOutside } from './hooks/dom/useClickOutside';
 *
 * const ClickOutsideComponent: React.FC = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *   const ref = useClickOutside(() => setIsOpen(false));
 *
 *   return (
 *     <div ref={ref}>
 *       <button onClick={() => setIsOpen(true)}>Open Menu</button>
 *       {isOpen && <div className="menu">Menu Content</div>}
 *     </div>
 *   );
 * };
 *
 * export default ClickOutsideComponent;
 * ```
 */

export const useClickOutside = (handler: (event: MouseEvent) => void) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler]);

  return ref;
};
