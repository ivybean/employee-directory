import React from "react";

function TableData(props) {
  return(
    <tr className="employeeRow" key={props.id}>
      <td className="tdContent firstName"> {props.employee.lastName}</td>
      <td className="tdContent lastName"> {props.employee.firstName}</td>
      <td className="tdContent emailCol">{props.employee.email}</td>
      <td className="tdContent DeptartmentCol">{props.employee.department}</td>
    </tr>
  );
}

export default TableData;