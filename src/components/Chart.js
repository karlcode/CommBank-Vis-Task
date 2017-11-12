import React from 'react';
import './App.css';
import ReactGridLayout from 'react-grid-layout';
import BarGraph from './BarGraph'
import PieGraph from './PieGraph'
import ScatterPlot from './ScatterPlot'
import Table from './Table'

const Chart = (props) => {
  var layout = [
    {i: 'bar', x: 1, y: 0, w: 7, h: 2.5},
    {i: 'pie', x: 9, y: 0, w: 4, h: 1.5},
    {i: 'third', x: 9, y: 0, w: 4, h: 1},
  ];
  return (
    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1900} >
    <div className="card" key="bar">
      <h1>Face Value of Penalties - 2013</h1>
      <BarGraph data={props.data}/>
    </div>
    <div className="card" key="pie">
      <h3>FV Percentages</h3>
      <PieGraph data={props.data}/>
    </div>
    <div className="card" key="third">
      <Table data={props.data}/>
    </div>
    </ReactGridLayout>
  );
}


export default Chart;