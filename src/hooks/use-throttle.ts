import { useState, useEffect, useRef } from 'react';

export const useThrottle = <T,>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => {
      setThrottledValue(value);
      lastRan.current = Date.now();
    };

    const remainingTime = limit - (Date.now() - lastRan.current);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(handler, remainingTime > 0 ? remainingTime : 0);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
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
