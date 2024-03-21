//src\components\EmploeeCards\EmployeeCards.jsx
import React from "react";
function EmployeeCards({ employees }) {
    return (
      <section className="employeeCards">
        <h1>Working with GET request</h1>
        <ul className="em-items">
          <li className="em-photo"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        
        <button className="showmore-btn" type="button">
        Show more
        </button>
        
      </section>
    );
  }
  
  export default EmployeeCards;