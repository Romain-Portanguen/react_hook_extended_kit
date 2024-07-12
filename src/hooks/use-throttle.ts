import { useState, useEffect, useRef } from 'react';

export const useThrottle = <T,>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

/**
 * A custom hook that throttles a value.
 *
 * @param value - The value to throttle.
 * @param limit - The throttle limit in milliseconds.
 * @returns The throttled value.
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { useThrottle } from './hooks/useThrottle';
 *
 * const ThrottleComponent: React.FC = () => {
 *   const [value, setValue] = useState('');
 *   const throttledValue = useThrottle(value, 500);
 *
 *   return (
 *     <div>
 *       <input
 *         type="text"
 *         value={value}
 *         onChange={(e) => setValue(e.target.value)}
 *         placeholder="Type something..."
 *       />
 *       <p>Throttled Value: {throttledValue}</p>
 *     </div>
 *   );
 * };
 *
 * export default ThrottleComponent;
 * ```
 */
