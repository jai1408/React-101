import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "$450",
      date: new Date(2021, 4, 22),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: "$45",
      date: new Date(2021, 9, 10),
    },
    {
      id: "e3",
      title: "Chair",
      amount: "$40",
      date: new Date(2021, 3, 2),
    },
    {
      id: "e4",
      title: "Wooden Desk",
      amount: "$400",
      date: new Date(2020, 4, 12),
    },
  ];

  /**
 * * alternative for JSX
    return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );
 */

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
