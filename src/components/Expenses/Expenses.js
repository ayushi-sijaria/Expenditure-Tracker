import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredList = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYear
  );
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
      {filteredList.length == 0 && (
        <p className="error-text">No expense found !!</p>
      )}
      {filteredList.length > 0 &&
        filteredList.map((e) => (
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
            key={e.id}
          />
        ))}
    </div>
  );
};
export default Expenses;
