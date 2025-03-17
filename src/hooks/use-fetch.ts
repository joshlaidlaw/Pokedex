import { useState, useEffect } from "react";

export type PokemonDetail = {
  order: number;
  name: string;
  types: object[];
  sprites: object[];
  stats:  object[];
  abilities: object[];
}

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | { count?: number, results?: {name: string}[] } | PokemonDetail>(null);
  const [error, setError] = useState<null | Error | unknown>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        let data = {}
        if (!response.ok) { 
          setError(Error(`Error ${response.status}: ${response.statusText}`))
        }

        if(response.status !== 404) {
          data = await response.json();
        }

        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;