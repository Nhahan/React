import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {};

  const dateChangeHandler = (event) => {};

  return (
    <form>
      <div className="new-expense__controls">
        <div className="newexpense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler()} />
        </div>
        <div className="newexpense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="newexpense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
        <div className="new-expense_actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
