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

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};
export default NewExpense;
