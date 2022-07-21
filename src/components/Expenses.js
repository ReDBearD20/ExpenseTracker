import Card from "./Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  

  const [filterYear, setFilterYear] = useState("2020");
//getting the value of onChangeFilter from the expense filter
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  //we check if the expense date is equal to filter year then we render same via map below
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
        
      </Card>
    </div>
  );
}

export default Expenses;
