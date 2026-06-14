import { useEffect, useState } from "react";
import API from "../services/api";
import CreatePost from "../components/CreatePost";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function Home() {
  const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
 const fetchPosts = async () => {
  try {
    const res = await API.get("/posts");
    setPosts(res.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await API.delete(`/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };
const currentUser = JSON.parse(
  localStorage.getItem("user")
);
if (loading) {
  return (
    <div className="container">
      <h2>Loading Posts...</h2>
    </div>
  );
}
  return (
    <div className="container">
      <CreatePost fetchPosts={fetchPosts} />

      <hr />

<div className="hero">
  <h1>🚀 BlogSphere</h1>
  <p>
    Share your ideas, stories and experiences
    with the world.
  </p>
</div>

      <h1>All Posts</h1>

      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <Link to={`/posts/${post._id}`}>
            
          </Link>
          <h2>{post.title}</h2>

          <p>{post.content}</p>

        <div className="author-badge">
  👤 {post.author?.name}
</div>

          {currentUser?.id === post.author?._id && (
  <>
    <Link to={`/posts/${post._id}/edit`}>
      <button>
  <FaEdit /> Edit
</button>

    </Link>

    <button
      onClick={() => deletePost(post._id)}
      style={{ marginLeft: "10px" }}
    >
      <FaTrash /> Delete
    </button>
  </>
)}

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;