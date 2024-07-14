import { useEffect, useRef } from 'react';

/**
 * A custom hook that sets up an interval.
 *
 * @param callback - The function to call at each interval.
 * @param delay - The delay in milliseconds. Pass `null` to stop the interval.
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { useInterval } from './hooks/timing/useInterval';
 *
 * const IntervalComponent: React.FC = () => {
 *   const [count, setCount] = useState(0);
 *
 *   useInterval(() => {
 *     setCount(count + 1);
 *   }, 1000);
 *
 *   return <p>Count: {count}</p>;
 * };
 *
 * export default IntervalComponent;
 * ```
 */

export const useInterval = (
  callback: () => void,
  delay: number | null,
): void => {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
      intervalId.current = setInterval(() => savedCallback.current?.(), delay);
      return () => clearInterval(intervalId.current as NodeJS.Timeout);
    } else if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, [delay]);
};
