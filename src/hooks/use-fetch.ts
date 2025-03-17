import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | object>(null);
  const [error, setError] = useState<null | Error | unknown>(null);

  useEffect(() => {
    // const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(Error(`Error ${response.status}: ${response.statusText}`))
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // return () => controller.abort();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;