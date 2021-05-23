import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  /**
   * ? why to use const below for title & setTitle
   * ! because we are not changing the value by assigning, we are changing value by set method.
   */
  const [title, setTitle] = useState(props.title); //destructuring Modern JS
  //let title = props.title;
  //this clickHandler is not updating title because React is only rendering its component once.
  //so we will use react hooks `useState`
  const clickHandeler = () => {
    //title = "Updated Value!";
    setTitle("Updated Value!");
    /*
    * ! React hook useState don't support callbacks
    setTitle("Updated Value!", () => {
    console.log(this.state.name);
    });*/
    //console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        {/* <button onClick={clickHandeler}>Click me!</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;

/**
 * * state example in Class based Component
 * class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title;
    };
  }

  const clickHandeler = () => {
    this.setState({ 
      title: 'Updated Value!'; 
    }
  )}

  render() {
    return (
      <div>
        <button onClick={clickHandler}>
          Click me
        </button>
      </div>
    );
  }
}
 */
