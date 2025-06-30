import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [name, setName] = useState("mario");
  const onAppendName = () => setName((prev) => `${prev} - updated`);
  const onChangeName = () => setName("Luigi");
  const onResetName = () => setName("mario");

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "luigi",
      id: 3,
    },
  ]);
  const marioBlogs = blogs.filter((blog) => blog.author === "mario");
  const deleteBlog = (id) =>
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  const addBlog = () => {
    setBlogs((prev) => {
      return [
        ...prev,
        {
          title: "It is me Mario",
          body: "lorem ipsum...",
          author: "mario",
          id: prev.length + 1,
        },
      ];
    });
  };

  useEffect(() => {
    console.log("js test", blogs);
  }, [name]);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>

      <button onClick={onAppendName}>Append name</button>
      <button onClick={onChangeName}>Change name</button>
      <button onClick={onResetName}>Reset name</button>

      <BlogList
        blogs={blogs}
        title="All Blogs!"
        onDeleteBlog={deleteBlog}
      ></BlogList>
      <BlogList
        blogs={marioBlogs}
        title="Mario Blogs!"
        onDeleteBlog={deleteBlog}
      ></BlogList>

      <button onClick={addBlog}>Add Blog</button>
    </div>
  );
};
