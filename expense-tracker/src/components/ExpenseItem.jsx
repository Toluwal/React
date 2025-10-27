import { useState } from 'react';

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(expense.description);
  const [amt, setAmt] = useState(expense.amount);

  function handleSave() {
    if (desc.trim() === '' || Number(amt) <= 0) return;
    onEdit(expense.id, { description: desc.trim(), amount: Number(amt) });
    setIsEditing(false);
  }

  function formatNaira(value) {
    return value.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
  }

  return (
    <div className={`expense-item category-${expense.category}`}>
      <div className="expense-left">
        <div className="category-badge">{expense.category}</div>
        <div className="expense-main">
          {isEditing ? (
            <>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                autoFocus
              />
              <input
                type="number"
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                step="0.01"
                min="0"
              />
            </>
          ) : (
            <>
              <span className="expense-desc" onClick={() => setIsEditing(true)}>{expense.description}</span>
              <span className="expense-date">{new Date(expense.date).toLocaleDateString('en-NG')}</span>
            </>
          )}
        </div>
      </div>

      <div className="expense-right">
        <span className="expense-amount">{formatNaira(Number(expense.amount))}</span>
        {isEditing ? (
          <div className="item-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => { setIsEditing(false); setDesc(expense.description); setAmt(expense.amount); }}>Cancel</button>
          </div>
        ) : (
          <div className="item-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(expense.id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpenseItem;
