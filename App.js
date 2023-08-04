import React from 'react';
import ExpenseList from './ExpenseList';

const App = () => {
  const expenses = [
    { id: 1, location: 'Food' },
    { id: 2, location: 'Petrol' },
    { id: 3, location: 'Movies' },
    // Add more expenses as needed
  ];

  return (
    <div>
      <h1>My Expenses</h1>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <h2>{expense.location}</h2>
          <ExpenseList LocationOfExpenditure={expense.location} />
        </div>
      ))}
    </div>
  );
};

export default App;
