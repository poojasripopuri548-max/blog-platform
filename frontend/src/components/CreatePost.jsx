import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function CreatePost({ fetchPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/posts", {
        title,
        content,
      });

      toast.success("Post Created");

      setTitle("");
      setContent("");

      fetchPosts();
    } catch (error) {
      toast.error("Failed to create post");
      console.log(error);
    }
  };

  return (
    <div className="post-card">
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="5"
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">
          🚀 Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;