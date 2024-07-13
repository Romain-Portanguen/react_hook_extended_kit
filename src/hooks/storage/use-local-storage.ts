import { useState } from 'react';

/**
 * A custom hook that synchronizes state with localStorage.
 *
 * @param key - The key to store the value under in localStorage.
 * @param initialValue - The initial value to use if the key is not present in localStorage.
 * @returns An array containing the current value and a function to update it.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useLocalStorage } from './hooks/use-local-storage';
 *
 * const LocalStorageComponent: React.FC = () => {
 *   const [name, setName] = useLocalStorage('name', 'John Doe');
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
 * export default LocalStorageComponent;
 * ```
 */

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
