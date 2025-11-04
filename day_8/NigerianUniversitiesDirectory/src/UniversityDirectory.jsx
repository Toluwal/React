import { useState, useEffect } from "react";

function UniversityDirectory() {
  const [universities, setUniversities] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Nigeria")
      .then((res) => res.json())
      .then((data) => {
        setUniversities(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = universities.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Nigerian Universities</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {!loading && (
        <p>Showing {filtered.length} universities</p>
      )}
      {!loading &&
        filtered.map((u) => (
          <div key={u.name}>
            <h4>{u.name}</h4>
            <p>{u["state-province"] || "N/A"}</p>
            <a href={u.web_pages[0]} target="_blank" rel="noreferrer">
              {u.web_pages[0]}
            </a>
          </div>
        ))}
    </div>
  );
}

export default UniversityDirectory;
