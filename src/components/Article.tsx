type itemtype = {
    name: string;
    body: string;
    email: string;
    id: number;
  };

const Article = ({name,body,email,id}: itemtype) => {
  return (
    <article className="story" key={id}>
    <h4 className="title">{name}</h4>
    <p className="info">{body}</p>
    <div>
      <a className="read-link" target="_blank" rel="noopener noreferrer" style={{cursor:'pointer'}}>
      {email}
      </a>
    </div>
  </article>
  )
}

export default Article