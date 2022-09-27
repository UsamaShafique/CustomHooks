import { useEffect, useState } from "react";

const useFetch = <T,>(url: string, initialState: T) => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .finally(() => setloading(false));
    }, 1500);
    setloading(true);
  }, [url]);

  return [data, loading] as const;
  // return data
};

export default useFetch;
