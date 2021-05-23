import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: "e" + Math.floor(Math.random() * 1000).toString(),
    };
    console.log("In NewExpense.js");
    console.log(expenseData);
    props.onAddExpense(expenseData); //passing expenseData to NewExpense.js'onAddExpense called in App.js
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
