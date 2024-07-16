import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to observe the visibility of an element using Intersection Observer API.
 *
 * @param options - IntersectionObserver options.
 * @returns {Array} A tuple containing a ref to attach to the element to be observed and a boolean indicating if the element is visible.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useIntersectionObserver } from './hooks/utils/use-intersection-observer';
 *
 * const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
 *   const [ref, isVisible] = useIntersectionObserver({
 *     root: null,
 *     rootMargin: '0px',
 *     threshold: 0.1,
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       {isVisible ? <img src={src} alt={alt} /> : <div>Loading...</div>}
 *     </div>
 *   );
 * };
 *
 * const App: React.FC = () => {
 *   return (
 *     <div>
 *       <h1>Lazy Loading Images Example</h1>
 *       <LazyImage src="https://via.placeholder.com/300" alt="Example Image 1" />
 *       <LazyImage src="https://via.placeholder.com/300" alt="Example Image 2" />
 *       <LazyImage src="https://via.placeholder.com/300" alt="Example Image 3" />
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 */

export const useIntersectionObserver = (
  options?: IntersectionObserverInit,
): [React.RefObject<HTMLElement>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options,
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};
