import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("baka");
  };


  return (
    <Card className="expenseItem">
      <ExpenseDate date={props.date} />

      <div className="expenseItem__description">
        <h2>{props.title}</h2>
        <div className="expenseItem__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
