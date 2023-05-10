import useFetch from '../02-useFetch/useFetch'
type itemtype={
  name:string,
  body:string,
  email:string
  id:number
}

const FetchComponent = () => {
  // @ts-ignore
  const {Loading,isError,data}= useFetch('https://jsonplaceholder.typicode.com/comments')
  if(Loading) return <h1>Loading ....</h1>
  if(isError) return <p>Something, went wrong</p>
  console.log(data);

  return( 
    <div className='stories'>
       {
         data?.map((data: itemtype) => (
          <article className="story" key={data?.id}>
      <h4 className="title">{data?.name}</h4>
      <p className='info'>{data?.body}</p>
      <p className='info'>{data?.email}</p>
     </article>
        ))
       } 
     
    </div>
   
  );
}

export default FetchComponent
