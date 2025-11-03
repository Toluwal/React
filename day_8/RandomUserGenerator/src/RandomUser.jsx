import { useState, useEffect } from "react";

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const fetchUser = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
        setCount((c) => c + 1);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Random User Profile</h2>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div>
          <img src={user.picture.large} alt="User" />
          <h3>{user.name.first} {user.name.last}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.location.city}, {user.location.country}</p>
        </div>
      )}
      <button onClick={fetchUser}>Get New User</button>
      <p>Users viewed: {count}</p>
    </div>
  );
}

export default RandomUser;
