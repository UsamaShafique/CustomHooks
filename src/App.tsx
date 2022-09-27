import React from "react";
import useFetch from "./hooks/useFetch";

const App: React.FunctionComponent = () => {
  interface ItodoInteface {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
  }

  const [data, loading] = useFetch<ItodoInteface[]>(
    "https://jsonplaceholder.typicode.com/todos",
    []
  );
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <p>Info received from a API</p>
      {data.map((item: any, index: any) => {
        return (
          <div key={index}>
            <p>
              Item Id: <strong>{item.id}</strong>
              <br />
              completed: <strong>{item.completed}</strong>
              <br />
              Title: <strong>{item.title}</strong>
              <br />
              User Id: <strong>{item.userId}</strong>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default App;
