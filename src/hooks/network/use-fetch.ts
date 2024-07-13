import { useState, useEffect } from 'react';

/**
 * A custom hook to fetch data from an API.
 *
 * @param url - The URL to fetch data from.
 * @param options - Optional fetch options.
 * @returns An object containing the data, error, and loading state.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { useFetch } from './hooks/use-fetch';
 *
 * const FetchComponent: React.FC = () => {
 *   const { data, error, loading } = useFetch('https://api.example.com/data');
 *
 *   if (loading) return <p>Loading...</p>;
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <div>
 *       <h1>Fetched Data:</h1>
 *       <pre>{JSON.stringify(data, null, 2)}</pre>
 *     </div>
 *   );
 * };
 *
 * export default FetchComponent;
 * ```
 */

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = (await response.json()) as T;
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
};
