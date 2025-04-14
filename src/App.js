import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Ugali Matumbo', category: 'Food', amount: 200, date: 'Wednesday', description: "Wednesday's Lunch power tokens" },
    { id: 2, name: 'KPLC tokens', category: 'Bills', amount: 500, date: 'Monday', description: 'Electricity bill' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { id: expenses.length + 1, ...newExpense }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances: life, categorize, and analyze your spending.</p>
      <ExpenseForm onAddExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;