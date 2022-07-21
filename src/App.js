import "./App.css";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";
import { useState } from "react";
const App = () => {
  //we use a custom attribute OnAddExpense to recieve the value from child NewExpense
  //the value recieved as a event in addExpenseHandler functn later used
  const DUMMY_EXPENSES = [
    {
      id: 'a',
      title: "car Insurance",
      amount: 99.2134,
      date: new Date(2020, 5, 12),
    },
    { id: 'b', title: "banana", amount: 92.2134, date: new Date(2021, 9, 12) },
    { id: 'c', title: "Pistol", amount: 867.24, date: new Date(2019, 7, 22) },
    { id: 'd', title: "bike", amount: 9991.21, date: new Date(2020, 1, 17) },
  ];
  
  
  const addExpenseHandler = (expense) => {
    setExpenses((prev)=>{
      return[expense,...prev];
    })
  };

  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)

    
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
