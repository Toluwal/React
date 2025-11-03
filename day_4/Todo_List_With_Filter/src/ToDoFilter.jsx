function TodoFilter({ filter, onFilterChange }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <span>Filter: </span>
      <button
        onClick={() => onFilterChange("All")}
        style={{ fontWeight: filter === "All" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange("Active")}
        style={{ fontWeight: filter === "Active" ? "bold" : "normal" }}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange("Completed")}
        style={{ fontWeight: filter === "Completed" ? "bold" : "normal" }}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
