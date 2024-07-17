import { useState } from 'react';

/**
 * A custom hook that synchronizes state with sessionStorage.
 *
 * @param key - The key to store the value under in sessionStorage.
 * @param initialValue - The initial value to use if the key is not present in sessionStorage.
 * @returns An array containing the current value and a function to update it.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useSessionStorage } from './hooks/use-session-storage';
 *
 * const SessionStorageComponent: React.FC = () => {
 *   const [name, setName] = useSessionStorage('name', 'John Doe');
 *
 *   return (
 *     <div>
 *       <p>Name: {name}</p>
 *       <input
 *         type="text"
 *         value={name}
 *         onChange={(e) => setName(e.target.value)}
 *       />
 *     </div>
 *   );
 * };
 *
 * export default SessionStorageComponent;
 * ```
 */

export const useSessionStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
