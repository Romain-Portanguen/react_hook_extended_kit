import { useState } from 'react';

/**
 * A custom hook that provides a counter state with increment, decrement, and reset functions.
 *
 * @param initialValue - The initial value of the counter.
 * @returns An array containing the current count, an increment function, a decrement function, and a reset function.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useCounter } from './hooks/use-counter';
 *
 * const CounterComponent: React.FC = () => {
 *   const [count, increment, decrement, reset] = useCounter(0);
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={increment}>Increment</button>
 *       <button onClick={decrement}>Decrement</button>
 *       <button onClick={reset}>Reset</button>
 *     </div>
 *   );
 * };
 *
 * export default CounterComponent;
 * ```
 */

export const useCounter = (
  initialValue: number = 0,
): [number, () => void, () => void, () => void] => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset];
};
