function ExpenseStats({ expenses }) {
  const total = expenses.reduce((s, e) => s + Number(e.amount), 0);
  const count = expenses.length;
  const highest = expenses.length ? Math.max(...expenses.map(e => Number(e.amount))) : 0;
  const breakdown = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  function formatNaira(value) {
    return value.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
  }

  const categories = ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'];

  return (
    <div className="expense-stats">
      <div className="stat-card">
        <span className="stat-label">Total Spent</span>
        <span className="stat-number">{formatNaira(total)}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Number of Expenses</span>
        <span className="stat-number">{count}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Highest Expense</span>
        <span className="stat-number">{formatNaira(highest)}</span>
      </div>
      <div className="breakdown">
        <span className="breakdown-title">Breakdown</span>
        <div className="breakdown-list">
          {categories.map(cat => (
            <div key={cat} className="breakdown-item">
              <span className="breakdown-cat">{cat}</span>
              <span className="breakdown-amt">{formatNaira(breakdown[cat] || 0)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpenseStats;
