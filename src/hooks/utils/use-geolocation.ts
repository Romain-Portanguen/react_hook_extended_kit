import { useState, useEffect } from 'react';

interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

interface GeolocationState {
  coords: {
    latitude: number | null;
    longitude: number | null;
  };
  timestamp: number | null;
  error: string | null;
}

/**
 * A custom hook that tracks the user's geolocation.
 *
 * @param options - Geolocation options.
 * @returns An object containing the user's coordinates and any error encountered.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useGeolocation } from './hooks/use-geolocation';
 *
 * const GeolocationComponent: React.FC = () => {
 *   const { coords, error } = useGeolocation();
 *
 *   return (
 *     <div>
 *       {error ? (
 *         <p>Error: {error}</p>
 *       ) : (
 *         <p>
 *           Latitude: {coords.latitude}, Longitude: {coords.longitude}
 *         </p>
 *       )}
 *     </div>
 *   );
 * };
 *
 * export default GeolocationComponent;
 * ```
 */
export const useGeolocation = (
  options?: GeolocationOptions,
): GeolocationState => {
  const [state, setState] = useState<GeolocationState>({
    coords: {
      latitude: null,
      longitude: null,
    },
    timestamp: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState((prevState) => ({
        ...prevState,
        error: 'Geolocation is not supported by your browser',
      }));
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setState({
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        timestamp: position.timestamp,
        error: null,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      setState((prevState) => ({
        ...prevState,
        error: error.message,
      }));
    };

    const watcherId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      options,
    );

    return () => {
      navigator.geolocation.clearWatch(watcherId);
    };
  }, [options]);

  return state;
};
