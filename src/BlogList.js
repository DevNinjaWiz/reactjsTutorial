import { Link } from "react-router-dom";

export const BlogList = ({ blogs, title, onDeleteBlog }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/* <button onClick={() => onDeleteBlog(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};
