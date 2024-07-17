import { useState, useEffect } from 'react';

/**
 * A custom hook that detects user inactivity.
 *
 * @param timeout - The inactivity timeout in milliseconds.
 * @returns A boolean indicating if the user is idle.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useIdle } from './hooks/use-idle';
 *
 * const IdleComponent: React.FC = () => {
 *   const isIdle = useIdle(3000);
 *
 *   return (
 *     <div>
 *       {isIdle ? <p>User is idle</p> : <p>User is active</p>}
 *     </div>
 *   );
 * };
 *
 * export default IdleComponent;
 * ```
 */

export const useIdle = (timeout: number): boolean => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timer);
      setIsIdle(false);
      timer = setTimeout(() => setIsIdle(true), timeout);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    timer = setTimeout(() => setIsIdle(true), timeout);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [timeout]);

  return isIdle;
};
