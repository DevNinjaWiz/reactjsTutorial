import { BlogList } from "./BlogList";
import { useFetch } from "./useFetch";

export const Home = () => {
  // const [name, setName] = useState("mario");
  // const onAppendName = () => setName((prev) => `${prev} - updated`);
  // const onChangeName = () => setName("Luigi");
  // const onResetName = () => setName("mario");

  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const marioBlogs = useMemo(
  //   () => blogs.filter((blog) => blog.author === "mario"),
  //   [blogs]
  // );
  // const deleteBlog = (id) =>
  //   setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  // const addBlog = () => {
  //   setBlogs((prev) => {
  //     return [
  //       ...prev,
  //       {
  //         title: "It is me Mario",
  //         body: "lorem ipsum...",
  //         author: "mario",
  //         id: prev.length + 1,
  //       },
  //     ];
  //   });
  // };

  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // onDeleteBlog={deleteBlog}
        ></BlogList>
      )}

      {/* <p>{name}</p> */}
      {/* <button onClick={onAppendName}>Append name</button>
      <button onClick={onChangeName}>Change name</button>
      <button onClick={onResetName}>Reset name</button> */}

      {/* <BlogList
        blogs={marioBlogs}
        title="Mario Blogs!"
        onDeleteBlog={deleteBlog}
      ></BlogList> */}

      {/* <button onClick={addBlog}>Add Blog</button> */}
    </div>
  );
};
