import React from "react";

function TableData(props) {
  return(
    <tr className="employeeTable" key={props.id}>
      <td className="tdContent firstName"> {props.employee.first}</td>
      <td className="tdContent lastName"> {props.employee.last}</td>
      <td className="tdContent emailCol">{props.employee.email}</td>
      <td className="tdContent phoneCol">{props.employee.phone}</td>
    </tr>
  );
}

export default TableData;