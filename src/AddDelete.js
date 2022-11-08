import React, { useState } from "react";
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  //use of hook for couting
  const [noOfRows, setNoOfRows] = useState(1);
  return (
    <div className="app container p-5">
      <h1 className="p-5">Reactjs Add Delete Row on Button Click Using UseState Hook</h1>
      <table class="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        {[...Array(noOfRows)].map((elementInArray, index) => {
         
              return (
                <tr>
                <th scope="row">{index}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
                );
            })}
            
            </tbody>
            </table>
            <button type="button" class="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add</button>
            <button type="button" class="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button>
       </div>
  );
}