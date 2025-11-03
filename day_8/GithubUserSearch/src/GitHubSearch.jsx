import { useState } from "react";

function GitHubSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = () => {
    setLoading(true);
    setError("");
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.status === 404) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={searchUser}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && !loading && (
        <div>
          <img src={user.avatar_url} alt="Avatar" width="100" />
          <h3>@{user.login}</h3>
          <p>{user.name}</p>
          <p>{user.bio}</p>
          <p>Repos: {user.public_repos}</p>
          <p> Followers: {user.followers}</p>
        </div>
      )}
    </div>
  );
}

export default GitHubSearch;
