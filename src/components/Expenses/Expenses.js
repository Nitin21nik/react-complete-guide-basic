import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const[filteredYear, setFilteredYear]=useState('2020');

  const filteredChangeHandler=filteredYear=>{
    setFilteredYear(filteredYear);
  }

  const filteredExpenses=props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList  items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
