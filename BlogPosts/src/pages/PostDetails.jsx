import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

function PostDetails() {
  const { id } = useParams();

  const post = posts.find(
    (item) => item.id === Number(id)
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>{post.title}</h1>

      <h3>Author: {post.author}</h3>

      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;