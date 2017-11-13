import React from 'react';
import './App.css';
import './Table.css';
import ReactTable from "react-table";
import {connect} from "react-redux";

const Table = (props) => {
  return (
    <div>
      <ReactTable
          data={props.data}
          columns={[
            {
              Header: `Offences for ${props.year}`,
              columns: [
                {
                  Header: "Offences",
                  accessor: "offence"
                },
                {
                  Header: "# of Infringements",
                  accessor: `penalties${props.year}`
                },
                {
                  Header: "Face Value ($)",
                  accessor: `fv${props.year}`
                },
                {
                  Header: "Average $ Per PN",
                  accessor: "average"
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


function mapStateToProps(state) {
  const map = { 
      year: state.filters.year,
      category: state.filters.category
   };
  return map;
}

export default connect(mapStateToProps)(Table);