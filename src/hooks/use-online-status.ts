import { useState, useEffect } from 'react';

export const useOnlineStatus = (): boolean => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return online;
};

/**
 * A custom hook that returns the online status of the browser.
 *
 * @returns A boolean indicating if the browser is online.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useOnlineStatus } from './hooks/useOnlineStatus';
 *
 * const OnlineStatusComponent: React.FC = () => {
 *   const isOnline = useOnlineStatus();
 *
 *   return <p>{isOnline ? 'Online' : 'Offline'}</p>;
 * };
 *
 * export default OnlineStatusComponent;
 * ```
 */
