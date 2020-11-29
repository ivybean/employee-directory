import React, { useState, createContext } from "react";
import Container from "../components/Container";
import employeeData from "../Data/employeeData.json";


const SearchContext = createContext("");

const EmployeeContext = createContext({
  sortedField: null,
  employeesSorted: [],
  onClick: () => undefined
});

function CreateDirectory() {
  const [search, setSearch] = useState("")
  
  const [employees, setEmployees] = useState({
    sortedField: null,
    employeesSorted: employeeData,
    onClick: (sortedField) => {
      setEmployees({...employees, sortedField})
    },
  });

  if (employees.sortedField !== null) {
    employees.employeesSorted.sort((a,b) => {
      if (a[employees.sortedField] < b[employees.sortedField]) {
        return -1;
      }
      if (a[employees.sortedField] > b[employees.sortedField]) {
        return 0;
      }
    });
  }

  let filteredEmployees = []

  if (search.length !== 0) {
    employeeData.map(employee => {
      const firstName = employee.first.toLowerCase();
      const lastName = employee.last.toLowerCase();
      if (first.includes(search) || last.includes(search)) {
        filteredEmployees.push(employee);
      }
      return "mapping successful"
    })
    employees.employeesSorted = filteredEmployees;
  } else {
    employees.employeesSorted = employeeData;
  }

  return (
    <>
      <EmployeeContext.Provider value={employees}>
        <SearchContext.Provider value={{search, setSearch}}>
          <Container />
        </SearchContext.Provider>
      </EmployeeContext.Provider>
    </>
  );
}

export default CreateDirectory;