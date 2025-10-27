import { useState } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import CategoryFilter from './components/CategoryFilter';
import ExpenseStats from './components/ExpenseStats';
import ExpenseList from './components/ExpenseList';
import './ExpenseTracker.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Lunch at Mama Put', amount: 1500, category: 'Food', date: '2025-01-15' },
    { id: 2, description: 'Bus to work', amount: 200, category: 'Transport', date: '2025-01-16' },
    { id: 3, description: 'Netflix', amount: 1200, category: 'Entertainment', date: '2025-01-18' }
  ]);

  const [filter, setFilter] = useState('All');

  function addExpense({ description, amount, category }) {
    const newExpense = {
      id: Date.now(),
      description,
      amount: Number(amount),
      category,
      date: new Date().toISOString().slice(0, 10)
    };
    setExpenses([...expenses, newExpense]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter(e => e.id !== id));
  }

  function editExpense(id, updates) {
    setExpenses(expenses.map(e => e.id === id ? { ...e, ...updates } : e));
  }

  const visibleExpenses = expenses.filter(e => filter === 'All' ? true : e.category === filter);

  return (
    <div className="tracker-app">
      <Header />
      <div className="container">
        <AddExpenseForm onAddExpense={addExpense} />
        <CategoryFilter currentFilter={filter} onFilterChange={setFilter} />
        <ExpenseStats expenses={expenses} />
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={deleteExpense}
          onEdit={editExpense}
        />
      </div>
    </div>
  );
}

export default App;
