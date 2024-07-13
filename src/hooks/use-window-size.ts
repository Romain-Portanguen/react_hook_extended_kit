import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * A custom hook that returns the current window size.
 *
 * @returns An object containing the width and height of the window.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useWindowSize } from './hooks/useWindowSize';
 *
 * const WindowSizeComponent: React.FC = () => {
 *   const { width, height } = useWindowSize();
 *
 *   return (
 *     <div>
 *       <p>Width: {width}px</p>
 *       <p>Height: {height}px</p>
 *     </div>
 *   );
 * };
 *
 * export default WindowSizeComponent;
 * ```
 */
