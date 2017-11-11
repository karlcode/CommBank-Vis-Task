import React, { Component } from 'react';
import './App.css';
import ReactGridLayout from 'react-grid-layout';

class Table extends Component {

  render() {
    var layout = [
      {i: 'bar', x: 1, y: 0, w: 7, h: 2.5},
      {i: 'pie', x: 9, y: 0, w: 4, h: 1.5},
      {i: 'third', x: 9, y: 0, w: 4, h: 1},
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1900} >
      <h1>Test</h1>
      </ReactGridLayout>
    );
  }
}

export default Table;