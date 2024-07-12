import { useState } from 'react';

export const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
};

/**
 * A custom hook that provides a boolean state with a toggle function.
 *
 * @param initialValue - The initial value of the boolean state.
 * @returns An array containing the current value and a function to toggle it.
 *
 * @example
 * ```tsx
 * const [value, toggleValue] = useToggle(false);
 * ```
 */
