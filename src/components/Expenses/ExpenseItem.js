import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let title = props.title;
  //this clickHandler is not updating title because React is only rendering its component once.
  //so we will use react hooks `useState`
  const clickHandeler = () => {
    title = "Updated Value!";
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandeler}>Click me!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
