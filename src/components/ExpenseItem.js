import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="main-div">
      <div className="items-div">
        <div className="date">{props.date}</div>
        <div className="title">{props.title}</div>
        <div className="details">{props.details}</div>
        <div className="action"><button type="submit" className="button-action">{props.action}</button></div>
      </div>
    </div>
  );
}

export default ExpenseItem;
