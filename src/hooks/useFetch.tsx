import { useEffect, useState } from "react";

const useFetch = <T,>(url: string, initialState: T) => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setloading(false));
  }, [url]);

  return [data, loading] as const
  // return data
}

export default useFetch;
