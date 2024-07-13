import { useState, useEffect } from 'react';

/**
 * A custom hook that listens for changes to a media query.
 *
 * @param query - The media query to listen for.
 * @returns A boolean indicating if the media query matches.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useMediaQuery } from './hooks/use-media-query';
 *
 * const MediaQueryComponent: React.FC = () => {
 *   const isLargeScreen = useMediaQuery('(min-width: 1024px)');
 *
 *   return <p>{isLargeScreen ? 'Large Screen' : 'Small Screen'}</p>;
 * };
 *
 * export default MediaQueryComponent;
 * ```
 */

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);

  return matches;
};
