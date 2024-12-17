import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";

function App() {
  const [budget, setBudget] = useState(""); // Budget as a string
  const [expenseName, setExpenseName] = useState("");
  const [expenseBudget, setExpenseBudget] = useState("");
  const [allExpenses, setAllExpenses] = useState(localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : []);

  // Local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(allExpenses));
  }, [allExpenses]);

  // Total expenses
  const totalExpenses = allExpenses.reduce((acc, item) => acc + Number(item.expBudget || 0), 0);

  // Update balance
  const balance = Number(budget || 0) - totalExpenses;

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (!budget || isNaN(budget) || Number(budget) <= 0) {
      alert("Please enter a valid budget amount!");
      return;
    }
    alert("Budget amount added successfully!");
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    if (!expenseName.trim() || !expenseBudget || isNaN(expenseBudget) || Number(expenseBudget) <= 0) {
      alert("Please enter valid expense information!");
      return;
    }

    const newExpense = {
      expName: expenseName,
      expBudget: expenseBudget,
    };

    setAllExpenses([...allExpenses, newExpense]);
    setExpenseName("");
    setExpenseBudget("");
    alert("Expense added successfully!");
  };

  // const handleDeleteExpense = (id) => {
  //   // let d = allExpenses.filter(val => val.id != id);
  //   // localStorage.setItem("expenses", JSON.stringify(d));
  //   // alert("Expense deleted..!");
  //   // setAllExpenses(d);

  //   const updatedExpenses = allExpenses.filter((_, id) => id !== id);
  //   localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  //   setAllExpenses(updatedExpenses);
  //   alert("Expense deleted!");
  // }

  const handleDeleteExpense = (id) => {
    // Filter out the expense by index
    let d = allExpenses.filter((_, index) => index !== id);
  
    // Update localStorage and state
    localStorage.setItem("expenses", JSON.stringify(d));
    alert("Expense deleted!");
    setAllExpenses(d);
  };
  

  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="mb-4">Budget Tracker App</h1>
      </div>

      {/* Set Budget and Add Expense Section */}
      <div className="row mb-4">
        {/* Set Budget */}
        <div className="col-md-6 my-3">
          <div className="card shadow h-100">
            <div className="card-header bg-primary text-white text-center">
              <h4>Set Budget</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleBudgetSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter total budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success">Set Budget</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Add Expense */}
        <div className="col-md-6 my-3">
          <div className="card shadow h-100">
            <div className="card-header bg-info text-white text-center">
              <h4>Add Expense</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleExpenseSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter expense name"
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter expense amount"
                    value={expenseBudget}
                    onChange={(e) => setExpenseBudget(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Add Expense</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Summary Section */}
      <div className="card shadow mb-4">
        <div className="card-header bg-dark text-white text-center">
          <h4>Budget Summary</h4>
        </div>
        <div className="card-body">
          <table className="table table-bordered text-center" style={{ width: "100%" }}>
            <thead className="table-secondary">
              <tr>
                <th>Total Budget</th>
                <th>Total Expenses</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${budget || 0}</td>
                <td>${totalExpenses}</td>
                <td style={{ color: balance < 0 ? "red" : "green" }}>${balance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Expense List Section */}
      <div className="card shadow mb-4">
        <div className="card-header bg-info text-white text-center">
          <h4>Expense List</h4>
        </div>
        <div className="card-body">
          <table className="table table-bordered text-center" style={{ width: "100%" }}>
            <thead className="table-secondary">
              <tr>
                <th>Expense Name</th>
                <th>Expense Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allExpenses.map((e, index) => (
                <tr key={index}>
                  <td>{e.expName}</td>
                  <td>${e.expBudget}</td>
                  <td>
                    <button className="btn btn-outline-danger" onClick={() => handleDeleteExpense(index)}>Delete</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-outline-warning">Edit</button>
                  </td>
                </tr>
              ))}
              {allExpenses.length === 0 && (
                <tr>
                  <td colSpan={2}>No expenses added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
