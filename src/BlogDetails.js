import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const {id} = useParams();

  const {data, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);

  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + data.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  }

  return (  
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{error}</div>}
      { data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <p>{data.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;