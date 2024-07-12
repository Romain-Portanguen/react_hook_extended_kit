import { useRef, useEffect } from 'react';

export const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

/**
 * A custom hook that returns the previous value of a variable.
 *
 * @param value - The value to track.
 * @returns The previous value.
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { usePrevious } from './hooks/usePrevious';
 *
 * const PreviousComponent: React.FC = () => {
 *   const [count, setCount] = useState(0);
 *   const previousCount = usePrevious(count);
 *
 *   return (
 *     <div>
 *       <p>Current Count: {count}</p>
 *       <p>Previous Count: {previousCount}</p>
 *       <button onClick={() => setCount(count + 1)}>Increment</button>
 *     </div>
 *   );
 * };
 *
 * export default PreviousComponent;
 * ```
 */
