import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "Lorem Ipsum", author: "Mario", id: 1},
    {title: "Welcome Party", body: "Lorem Ipsum", author: "Luigi", id: 2},
    {title: "Web Dev", body: "Lorem Ipsum", author: "Yoshi", id: 3}
  ]);

  const handleDelete = (id) => {
    setBlogs(blogs.filter(x => x.id != id));
  };

  useEffect(() => {
    console.log('use effect');
  });

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter(x => x.author === "Mario")} title="Mario's Blogs" handleDelete={handleDelete} />
    </div>
   );
}
 
export default Home;