import Article from "../../components/Article";
import useFetch from "./useFetch";
type itemtype = {
  name: string;
  body: string;
  email: string;
  id: number;
};
const FetchComponent = () => {
  // @ts-ignore
  const { Loading, isError, data } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  console.log(data);
  console.log(isError);
  
  if (Loading) return <h1 className="text-center">Loading ....</h1>;
  if (isError) return <p>Something, went wrong</p>;

  return (
    <div className="stories">
      {data?.map((data: itemtype) => (
        <Article key={data?.id} {...data} />
      ))}
    </div>
  );
};

export default FetchComponent;
