import { useState } from "react";

function StatesExplorer() {
  const states = [
    { name: "Lagos", capital: "Ikeja", region: "South West" },
    { name: "Ogun", capital: "Abeokuta", region: "South West" },
    { name: "Kano", capital: "Kano", region: "North West" },
    { name: "Plateau", capital: "Jos", region: "North Central" },
    { name: "Enugu", capital: "Enugu", region: "South East" },
    { name: "Kaduna", capital: "Kaduna", region: "North West" },
    { name: "Rivers", capital: "Port Harcourt", region: "South South" },
    { name: "Abia", capital: "Umuahia", region: "South East" },
    { name: "Oyo", capital: "Ibadan", region: "South West" },
    { name: "Akwa Ibom", capital: "Uyo", region: "South South" },
  ];

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const filteredStates = states.filter((state) => {
    const matchesSearch =
      state.name.toLowerCase().includes(search.toLowerCase()) ||
      state.capital.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === "All" || state.region.includes(region);
    return matchesSearch && matchesRegion;
  });

  return (
    <div>
      <h1>🇳🇬 Nigerian States</h1>

      <div>
        <input
          type="text"
          placeholder="Search by state or capital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={{ margin: "1rem 0" }}>
        <button onClick={() => setRegion("All")}>All</button>
        <button onClick={() => setRegion("North")}>North</button>
        <button onClick={() => setRegion("South")}>South</button>
        <button onClick={() => setRegion("East")}>East</button>
        <button onClick={() => setRegion("West")}>West</button>
      </div>

      {filteredStates.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredStates.map((state, index) => (
            <li key={index}>
              {state.name} - Capital: {state.capital} ({state.region})
            </li>
          ))}
        </ul>
      )}

      <p>
        Showing {filteredStates.length} of {states.length} states
      </p>
    </div>
  );
}

export default StatesExplorer;
