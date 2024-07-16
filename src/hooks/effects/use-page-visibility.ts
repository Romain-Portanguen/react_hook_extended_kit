import { useState, useEffect } from 'react';

/**
 * Custom hook to track the visibility of the page.
 *
 * @returns {boolean} A boolean indicating if the page is visible.
 *
 * @example
 * ```tsx
 * import React, { useRef } from 'react';
 * import { usePageVisibility } from './hooks/ui/use-page-visibility';
 *
 * const VideoPlayer: React.FC = () => {
 *   const videoRef = useRef<HTMLVideoElement>(null);
 *   const isVisible = usePageVisibility();
 *
 *   React.useEffect(() => {
 *     if (videoRef.current) {
 *       if (isVisible) {
 *         videoRef.current.play();
 *       } else {
 *         videoRef.current.pause();
 *       }
 *     }
 *   }, [isVisible]);
 *
 *   return (
 *     <div>
 *       <video ref={videoRef} width="600" controls>
 *         <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
 *         Your browser does not support HTML5 video.
 *       </video>
 *     </div>
 *   );
 * };
 *
 * const App: React.FC = () => {
 *   return (
 *     <div>
 *       <h1>Page Visibility Example</h1>
 *       <VideoPlayer />
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 */

export const usePageVisibility = (): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(
    document.visibilityState === 'visible',
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
};
