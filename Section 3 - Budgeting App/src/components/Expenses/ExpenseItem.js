//This lets react know where to pull styling from
import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      {/* //className is being passed down as prop here NOT an attribute */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
