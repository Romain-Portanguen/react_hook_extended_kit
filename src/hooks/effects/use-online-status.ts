import { useState, useEffect } from 'react';

/**
 * Custom hook to track the online status of the browser.
 *
 * @returns {boolean} A boolean indicating if the browser is online.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useOnlineStatus } from './hooks/use-online-status';
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
