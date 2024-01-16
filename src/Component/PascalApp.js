import React, {useState, useEffect } from "react";

import Triangle from "./Triangle";

const PascalApp = () => {
    const [rowCount, setRowCount] = useState(5);
  
    const handleRowCountChange = (event) => {
      setRowCount(event.target.value);
    };
  
    return (
      <div className="App">
        <h1>Pascal's Triangle </h1>
        <label htmlFor="rowCount">Number of Rows:</label>
        <input
          type="number"
          id="rowCount"
          value={rowCount}
          onChange={handleRowCountChange}
          min="1"
        />
        <Triangle rows={rowCount} />
      </div>
    );
  };
  
  export default PascalApp;