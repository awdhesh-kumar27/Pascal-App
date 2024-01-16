import React, {useState, useEffect } from "react";

import Generate from "./Generate";

const Triangle = ({ rows }) => {
    const triangle = Generate(rows);
  
    return (
      <div className="triangle-container">
        {triangle.map((row, rowIndex) => (
          <div key={rowIndex} className="triangle-row">
            {row.map((number, columnIndex) => (
              <span key={columnIndex} className="triangle-cell">
                {number} {  }
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  export default Triangle;