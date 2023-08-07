import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  let filterInfoText = "2019,2021 & 2022";
  if (filterYear === "2019") {
    filterInfoText = "2020,2021 & 2022";
  } else if (filterYear === "2021") {
    filterInfoText = "2019,2020 & 2022";
  } else if (filterYear === "2022") {
    filterInfoText = "2019,2020 & 2021";
  }

  const updateFilterYear = (year) => {
    setFilterYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={updateFilterYear} selected={filterYear} />
        <p>Data for years {filterInfoText} is hidden.</p>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
