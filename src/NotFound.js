import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 Not Found</h2>
      <p>The page cannot be found</p>
      <Link to="/">Back to Home...</Link>
    </div>
  );
};
