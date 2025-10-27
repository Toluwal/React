import { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim() === '' || Number(amount) <= 0 || amount === '') {
      setError('Enter a valid description and amount greater than 0');
      return;
    }
    onAddExpense({ description: description.trim(), amount: Number(amount), category });
    setDescription('');
    setAmount('');
    setCategory('Food');
    setError('');
  }

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        step="0.01"
        min="0"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Others</option>
      </select>
      <button type="submit">Add Expense</button>
      {error && <div className="form-error">{error}</div>}
    </form>
  );
}

export default AddExpenseForm;
