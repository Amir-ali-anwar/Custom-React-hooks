import { useState, useEffect } from "react";

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
      SetError(Errordata);
    } finally {
      SetLoading(false);
    }
  };
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal;
    fetchData(signal);
    return ()=>{
      abortController.abort()
    }
  }, [url]);
  return { Loading, isError, data };
};
export default useFetch;
