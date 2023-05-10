import { useState, useEffect } from "react";
type fetch<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

const useFetch = (url: string) => {
  const [Loading, SetLoading] = useState<boolean>(true);
  const [isError, SetError] = useState<Error | null | string| ''>(null);
  const [data, SetData] = useState<[] | null>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error("Response not Ok");
      const data = await response.json();
      SetData(data);
      SetLoading(false);
    } catch (error) {
        const Errordata= new Error("something, Went wrong")
        SetError(Errordata);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return {Loading,isError,data}
};
export default useFetch;