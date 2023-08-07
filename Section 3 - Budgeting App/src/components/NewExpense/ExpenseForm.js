import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleChange = (id, value) => {
    if (id === "title") {
      setTitle(value);
    } else if (id === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  };

  // ALTERNATIVE USING ONE STATE VALUE
  //   const [input, setInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const handleTitleChange = (event) => {
  //     setInput((prevState) => {
  //       return {
  //         ...prevState,
  //         title: event.target,
  //       };
  //     });
  //   };
  //   const handleAmountChange = (event) => {
  //     setInput((prevState) => {
  //       return {
  //         ...prevState,
  //         amount: event.target,
  //       };
  //     });
  //   };
  //   const handleDateChange = (event) => {
  //     setInput((prevState) => {
  //       return {
  //         ...prevState,
  //         date: event.target,
  //       };
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpense(expenseData);
    setTitle("");
    setAmount(0);
    setDate("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(e) => handleChange("title", e.target.value)}
            type="text"
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(e) => handleChange("amount", e.target.value)}
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(e) => handleChange("date", e.target.value)}
            type="Date"
            value={date}
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
