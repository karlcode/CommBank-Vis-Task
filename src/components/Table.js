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
              Header: "Offences for 2013",
              columns: [
                {
                  Header: "Offences",
                  accessor: "offence"
                },
                {
                  Header: "# of Infringements",
                  accessor: "penalties"
                },
                {
                  Header: "Face Value ($)",
                  accessor: "fv"
                }
              ]
            }
          ]}
          defaultPageSize={8}
          className="-striped -highlight"
        />
    </div>
  );
}


export default Table;