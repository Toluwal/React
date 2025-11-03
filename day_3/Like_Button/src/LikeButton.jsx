import { useState } from "react";
import "./App.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <button
      className={liked ? "btn liked" : "btn"}
      onClick={toggleLike}
    >
      {liked ? "❤️ Liked" : "🤍 Like"} {count} {count === 1 ? "like" : "likes"}
    </button>
  );
}

export default LikeButton;
