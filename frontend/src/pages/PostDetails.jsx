import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function PostDetails() {
  const { id } = useParams();
const [post, setPost] = useState(null);
const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

const fetchPost = async () => {
  try {
    const res = await API.get(`/posts/${id}`);
    setPost(res.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  const fetchComments = async () => {
    const res = await API.get(`/comments/${id}`);
    setComments(res.data);
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const addComment = async (e) => {
    e.preventDefault();

    await API.post(`/comments/${id}`, {
      text,
    });

    setText("");
    fetchComments();
  };

  const deleteComment = async (commentId) => {
    try {
      await API.delete(`/comments/${commentId}`);
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };


if (loading) {
  return (
    <div className="spinner">
      Loading...
    </div>
  );
}
  return (
    <div className="container">
      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <h2>Comments</h2>

      <form onSubmit={addComment}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
        />

        <button type="submit">
          Add Comment
        </button>
      </form>

      {comments.map((comment) => (
  <div
    key={comment._id}
    className="comment-card"
  >
          <strong>{comment.user?.name}</strong>

          <p>{comment.text}</p>

          <button
            onClick={() => deleteComment(comment._id)}
          >
            Delete Comment
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostDetails;