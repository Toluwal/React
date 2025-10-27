function CategoryFilter({ currentFilter, onFilterChange }) {
  const categories = ['All', 'Food', 'Transport', 'Bills', 'Entertainment', 'Others'];

  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat}
          className={currentFilter === cat ? 'active' : ''}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
