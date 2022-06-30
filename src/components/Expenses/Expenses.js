import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={selectedYear}
      />
      {props.expenses.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </div>
  );
};
export default Expenses;
