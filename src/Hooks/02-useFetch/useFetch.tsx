import { useState, useEffect } from "react";
type fetch<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null | string;
};

const useFetch = (url: string) => {
  const [Loading, SetLoading] = useState<boolean>(true);
  const [isError, SetError] = useState<Error | null | string | "">(null);
  const [data, SetData] = useState<[] | null>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error("Response not Ok");
      const data = await response.json();
      SetData(data);
    }
     catch (error) {
      const Errordata = new Error("something, Went wrong");
      // if (error.name === "AbortError") {
      //   SetError("Request aborted");
      // } else {
      //   SetError("Request failed", error);
      // }
      SetError(Errordata);
    } finally {
      SetLoading(false);
    }
  };
  useEffect(() => {
    // const controller = new AbortController();
    fetchData();
    // return () => {
    //   controller.abort();
    // };
  }, [url]);
  return { Loading, isError, data };
};
export default useFetch;
