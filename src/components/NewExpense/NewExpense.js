import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
const NewExpense = (props) => {
  const saveDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toFixed(2),
    };
    props.onSaveData(newExpenseData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSaveData={saveDataHandler} stopEditing={stopEditing} />
      )}
    </div>
  );
};
export default NewExpense;
