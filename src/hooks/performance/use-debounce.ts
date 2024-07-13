import { useState, useEffect } from 'react';

/**
 * A custom hook that debounces a value.
 *
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced value.
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { useDebounce } from './hooks/use-debounce';
 *
 * const DebounceComponent: React.FC = () => {
 *   const [value, setValue] = useState('');
 *   const debouncedValue = useDebounce(value, 500);
 *
 *   return (
 *     <div>
 *       <input
 *         type="text"
 *         value={value}
 *         onChange={(e) => setValue(e.target.value)}
 *         placeholder="Type something..."
 *       />
 *       <p>Debounced Value: {debouncedValue}</p>
 *     </div>
 *   );
 * };
 *
 * export default DebounceComponent;
 * ```
 */

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
