import React, { Component } from 'react';
import './App.css';
import ReactGridLayout from 'react-grid-layout';
import Table from './Table';

const DataSheet = (props) => {
  var layout = [
    {i: 'table', x: 1, y: 0, w: 10, h: 1.5},
    {i: 'pie', x: 9, y: 0, w: 4, h: 1.5},
    {i: 'third', x: 9, y: 0, w: 4, h: 1},
  ];
  return (
    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1900} >
    <div className="card" key="table">
      <Table data={props.data}/>
    </div>
    </ReactGridLayout>
  );
}


export default DataSheet;