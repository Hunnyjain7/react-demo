// import logo from './logo.svg';
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      date: "aa",
      title: "Cool 1",
      details: "Cool details 1",
      action: "Delete",
    },
    {
      id: 2,
      date: "aaa",
      title: "Cool 2",
      details: "Cool details 2",
      action: "Delete",
    },
    {
      id: 3,
      date: "aaaa",
      title: "Cool 3",
      details: "Cool details 3",
      action: "Delete",
    },
    {
      id: 4,
      date: "aaaaa",
      title: "Cool 4",
      details: "Cool details 4",
      action: "Delete",
    },
  ];
  return (
    <div className="App">
      <header className="App-header ">
        <h1>Expense App</h1>
      </header>

      <div className="App-body">
        <h2>Here are your Expense Items</h2>

        <div className="table-header">
          <div className="table-header-date">Date</div>
          <div className="table-header-title">Title</div>
          <div className="table-header-details">Detail's</div>
          <div className="table-header-action">Action</div>
        </div>

        <Expenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;
