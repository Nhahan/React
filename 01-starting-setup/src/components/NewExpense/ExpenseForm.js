import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="newexpense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler()} />
        </div>
        <div className="newexpense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler()}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="newexpense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler()}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense_actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
