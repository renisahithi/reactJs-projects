import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h3>{post.title}</h3>
      <p>
        <b>Author:</b> {post.author}
      </p>

      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;