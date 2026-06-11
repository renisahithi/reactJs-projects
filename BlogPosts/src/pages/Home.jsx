import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { posts } from "../data/posts";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Home;