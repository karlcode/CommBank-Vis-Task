import React, { Component } from 'react';
import './App.css';
import './Table.css';
import ReactGridLayout from 'react-grid-layout';
import offenceData from './offenceData'
import ReactTable from "react-table";

const Table = (props) => {
  return (
    <div>
      <ReactTable
          data={props.data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    </div>
  );
}


export default Table;