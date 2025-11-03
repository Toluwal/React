import { useState, useEffect } from "react";

function TitleUpdater() {
  const [title, setTitle] = useState("");
  const defaultTitle = "React App";

  useEffect(() => {
    document.title = title ? `${defaultTitle} - ${title}` : defaultTitle;
  }, [title]);

  return (
    <div>
      <h2>Document Title Updater</h2>
      <input
        type="text"
        value={title}
        maxLength="60"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type here..."
      />
      <p>Preview: "{document.title}"</p>
      <button onClick={() => setTitle("")}>Reset to Default</button>
    </div>
  );
}

export default TitleUpdater;
