import { useState } from 'react';

/**
 * A custom hook that provides a boolean state with a toggle function.
 *
 * @param initialValue - The initial value of the boolean state.
 * @returns An array containing the current value and a function to toggle it.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useToggle } from './hooks/use-toggle';
 *
 * const ToggleComponent: React.FC = () => {
 *   const [value, toggleValue] = useToggle(false);
 *
 *   return (
 *     <div>
 *       <p>{value ? 'On' : 'Off'}</p>
 *       <button onClick={toggleValue}>Toggle</button>
 *     </div>
 *   );
 * };
 *
 * export default ToggleComponent;
 * ```
 */

export const useToggle = (
  initialValue: boolean = false,
): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => setValue((prevValue) => !prevValue);

  return [value, toggleValue];
};
