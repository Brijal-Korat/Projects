// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { useState, useEffect } from "react";

// function App() {
//   const [budget, setBudget] = useState(""); // Budget as a string
//   const [expenseName, setExpenseName] = useState("");
//   const [expenseBudget, setExpenseBudget] = useState("");
//   const [allExpenses, setAllExpenses] = useState(localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : []);

//   //localStorage
//   useEffect(() => {
//     localStorage.setItem("expenses", JSON.stringify(allExpenses));
//   }, [allExpenses]);

//   //total expenses
//   const totalExpenses = allExpenses.reduce((acc, item) => acc + Number(item.expBudget || 0), 0);

//   //update balance
//   const balance = Number(budget || 0) - totalExpenses;

//   const handleBudgetSubmit = (e) => {
//     e.preventDefault();
//     // isNaN = if the number is string,   Number = if the number is in negative value 
//     if (!budget || isNaN(budget) || Number(budget) <= 0) {
//       alert("Please enter budget amount..!");
//       return;
//     }
//     alert("Budget Amount added successfully..!");
//   };

//   const handleExpenseSubmit = (e) => {
//     e.preventDefault();

//     // trim = remove extra spaces, isNaN = if the number is string,   Number = if the number is in negative value
//     if (!expenseName.trim() || !expenseBudget || isNaN(expenseBudget) || Number(expenseBudget) <= 0) {
//       alert("Please enter expense information..!");
//       return;
//     }

//     const newExpense = {
//       expName: expenseName,
//       expBudget: expenseBudget, // Store as a string
//     };

//     setAllExpenses([...allExpenses, newExpense]);
//     setExpenseName("");
//     setExpenseBudget("");
//     alert("Expense added successfully..!");
//   };

//   return (
//     <>
//       <div align="center">
//         <h2 className="my-4">Budget Tracker App</h2>

//         <div>
//           <form onSubmit={handleBudgetSubmit}>
//             <table style={{ margin: "20px auto" }} border={1} cellSpacing={3} cellPadding={3}>
//               <thead>
//                 <tr>
//                   <td>Set Budget</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <input
//                       type="text"
//                       onChange={(e) => setBudget(e.target.value)}
//                       value={budget}
//                       placeholder="Enter total budget"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <button type="submit">Set Budget</button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>

//         <div>
//           <form onSubmit={handleExpenseSubmit}>
//             <table style={{ margin: "20px auto" }} border={1} cellSpacing={3} cellPadding={3}>
//               <thead>
//                 <tr>
//                   <td>Add Expense</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <input
//                       type="text"
//                       onChange={(e) => setExpenseName(e.target.value)}
//                       value={expenseName}
//                       placeholder="Enter Expense name"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <input
//                       type="text"
//                       onChange={(e) => setExpenseBudget(e.target.value)}
//                       value={expenseBudget}
//                       placeholder="Enter Expense amount"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <button type="submit">Add Expense</button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>

//         <div className="my-4">
//           <table border={1} width={700}>
//             <thead>
//               <tr align="center">
//                 <th>Total Budget</th>
//                 <th>Total Expenses</th>
//                 <th>Balance</th>
//               </tr>
//             </thead>
//             <tbody align="center">
//               <tr>
//                 <td>{budget}</td>
//                 <td>{totalExpenses}</td>
//                 <td style={{ color: balance < 0 ? "red" : "green" }}>{balance}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="my-4">
//           <h4>Expense List</h4>
//           <table border={1} width={500}>
//             <thead>
//               <tr align="center">
//                 <th>Expense Name</th>
//                 <th>Expense Amount</th>
//               </tr>
//             </thead>
//             <tbody align="center">
//               {
//                 allExpenses.map((e, index) => (
//                   <tr key={index}>
//                     <td>{e.expName}</td>
//                     <td>{e.expBudget}</td>
//                   </tr>
//                 ))
//               }
//               {
//                 allExpenses.length === 0 && (
//                   <tr>
//                     <td colSpan={2}>No expenses added yet.</td>
//                   </tr>
//                 )
//               }
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



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
        <div className="card-header bg-warning text-white text-center">
          <h4>Expense List</h4>
        </div>
        <div className="card-body">
          <table className="table table-bordered text-center" style={{ width: "100%" }}>
            <thead className="table-secondary">
              <tr>
                <th>Expense Name</th>
                <th>Expense Amount</th>
              </tr>
            </thead>
            <tbody>
              {allExpenses.map((e, index) => (
                <tr key={index}>
                  <td>{e.expName}</td>
                  <td>${e.expBudget}</td>
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
