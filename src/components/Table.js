import React from 'react';
import '../styles/App.css';
import '../styles/Table.css';
import ReactTable from "react-table";
import {connect} from "react-redux";

const Table = (props) => {
  return (
    <div>
      <ReactTable className="-striped -highlight"
          data={props.data}
          columns={[
            {
              //Header: `Offences for ${props.year}`,
              Header: () => <span><b>Offences for {props.year}</b></span>,
              columns: [
                {
                  Header: "Offences",
                  accessor: "offence"
                },
                {
                  Header: "# of Penalties",
                  accessor: `penalties${props.year}`
                },
                {
                  Header: "Face Value ($)",
                  accessor: `fv${props.year}`
                },
                {
                  Header: "Average $ Per PN",
                  accessor: `average${props.year}`
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