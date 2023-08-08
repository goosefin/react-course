import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import { useState } from "react";

const NewExpense = (props) => {
  const [expenseBtn, setExpenseBtn] = useState(false);

  const onSaveExpense = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
    toggleForm();
  };

  const toggleForm = () => {
    setExpenseBtn((prevState) => !prevState);
  };

  let content;

  if (expenseBtn) {
    content = <ExpenseForm onSaveExpense={onSaveExpense} />;
  } else {
    content = <button onClick={toggleForm}>Add New Expense</button>;
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
