import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        details={props.items[0].details}
        action={props.items[0].action}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        details={props.items[1].details}
        action={props.items[1].action}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        details={props.items[2].details}
        action={props.items[2].action}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        details={props.items[3].details}
        action={props.items[3].action}
      />
    </div>
  );
}

export default Expenses;
