import React from 'react';

const ExpenseList = (props) => {
  const { LocationOfExpenditure } = props;

  return (
    <div>
      <ul>
        <li>{LocationOfExpenditure} Rs 10</li>
        <li>{LocationOfExpenditure} Rs 100</li>
        <li>{LocationOfExpenditure} Rs 200</li>
      </ul>
    </div>
  );
};

export default ExpenseList;
