import React from 'react';
import './App.css';
import './Table.css';
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
                  accessor: "penalties2013"
                },
                {
                  Header: "Face Value ($)",
                  accessor: "fv2013"
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