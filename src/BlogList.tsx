import { Link } from "react-router-dom";

type BlogListProps = {
  blogs: [
    Blog
  ],
  title: string
}

type Blog = {
  id: number,
  title: string,
  author: string
};

const BlogList = ({ blogs, title }: BlogListProps) => {


  return ( 
  <div className="blog-list">
    <h2>{title}</h2>
    {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
  </div> );
}
 
export default BlogList;