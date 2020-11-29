import React, { useState} from 'react';
import './SearchBar.css';
import TableData from '../Table/Table';
import employeeData from "../Data/employeeData.json"

function SearchBar() {
  
  const [containerState, setContainerState] = useState({
    employeeData,
    searchedEmployees: [],
  })

  function ascendingSort(column) {
    let newSortAscending = employeeData.sort(( a,b ) => {
      if ( a[column] < b[column] ) {
        return -1;
      }
      if ( a[column] > b[column] ) {
        return 1;
      }
      return 0;
    })

    setContainerState({...containerState, searchedEmployees: newSortAscending, })
  }

  function descendingSort(column) {
    let newSortDescending = employeeData.sort(( a,b ) => {
      if ( a[column] > b[column] ){
        return -1;
      }
      if ( a[column] < b[column] ){
        return 1;
      }
      return 0;
    })

    setContainerState({...containerState, searchedEmployees, newSortDescending,})
  }

  const employeeSearch = (e) => {
    const newSearch = []

    containerState.employeeData.map (employee => {
      if (employee[e.target.name].toLowerCase().substring(0, e.target.value.length) === e.target.value.toLowerCase()) {
        newSearch.push(employee)
      }
    })

    setContainerState({...containerState, searchedEmployees: newSearch })
  }

  let searchedEmployees = containerState.employeeData

  if (containerState.searchedEmployees.length > 0) {
    searchedEmployees = containerState.searchedEmployees
  }

  return(
    <div className="card">
      <div className="card-body">
          <div className="container-fluid">

            
              <tr className="searchRow">
                <td className="colHead"><input
                className="searchInput" 
                type="text" 
                placeholder="Search by First Name" 
                name="firstName" 
                onChange={employeeSearch}>
              </input></td>
              <td className="colHead"><input
                className="searchInput" 
                type="text" 
                placeholder="Search by Last Name" 
                name="lastName" 
                onChange={employeeSearch}>
              </input></td>
              </tr>
              <table>
              <tr className="tableHeader">
                <th className="fNameHeader colHead"><i className="button btn fa fa-angle-double-up" onClick={() => ascendingSort('first')}></i>First Name<i className="button btn fa fa-angle-double-down" onClick={() => descendingSort('first')}></i></th>
                <th className="lNameHeader colHead"><i className="button btn fa fa-angle-double-up" onClick={() => ascendingSort('last')}></i>Last Name<i className="button btn fa fa-angle-double-down" onClick={() => descendingSort('last')}></i></th>
                <th className="emailHeader colHead"><i className="button btn fa fa-angle-double-up" onClick={() => ascendingSort('email')}></i>Email<i className="button btn fa fa-angle-double-down" onClick={() => descendingSort('email')}></i></th>
                <th className="phoneHeader colHead"><i className="button btn fa fa-angle-double-up" onClick={() => ascendingSort('phone')}></i>Phone<i className="button btn fa fa-angle-double-down" onClick={() => descendingSort('phone')}></i></th>
              </tr>
           
          {searchedEmployees.map((employee) => {
            return (<TableData employee={employee} />)
          })}
       
       </table>
          </div>
       
      </div>
    </div>
  );
}

export default SearchBar;