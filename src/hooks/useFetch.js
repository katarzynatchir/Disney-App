import { useEffect, useState } from 'react';

export const useFetch = (page = 1) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = 'https://api.disneyapi.dev/character';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${URL}?page=${page}`);
        if (!response.ok) throw new Error('Error during fetching data');
        const result = await response.json();
        setData(result.data);
        setTotalPages(result.info.totalPages);
        setCount(result.info.count);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return { data, totalPages, count, isLoading, error };
};
