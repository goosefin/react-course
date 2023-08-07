//This lets react know where to pull styling from
import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const handleChange = () => {
    setTitle("Updated");
    console.log("updated");
  };

  return (
    //className is being passed down as prop here NOT an attribute
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleChange}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
