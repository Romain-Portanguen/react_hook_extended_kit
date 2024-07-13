import { useState, useEffect } from 'react';

export const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  return [isDarkMode, toggleDarkMode];
};

/**
 * A custom hook that manages dark mode using localStorage.
 *
 * @returns An array containing the current dark mode state and a function to toggle it.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useDarkMode } from './hooks/useDarkMode';
 *
 * const DarkModeComponent: React.FC = () => {
 *   const [isDarkMode, toggleDarkMode] = useDarkMode();
 *
 *   return (
 *     <div style={{ background: isDarkMode ? '#333' : '#FFF', color: isDarkMode ? '#FFF' : '#000' }}>
 *       <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
 *       <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
 *     </div>
 *   );
 * };
 *
 * export default DarkModeComponent;
 * ```
 */
