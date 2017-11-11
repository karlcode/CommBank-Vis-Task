import React, { Component } from 'react';
import './App.css';
import offenceData from './offenceData';
import ReactGridLayout from 'react-grid-layout';
import BarGraph from './BarGraph'
import PieGraph from './PieGraph'
class Chart extends Component {
  state = {
    series: []
  }
  currencyFormat(values){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 2
    })    
    return formatter.format(values)
  }
  render() {
    var layout = [
      {i: 'bar', x: 1, y: 0, w: 8, h: 2},
      {i: 'pie', x: 10, y: 0, w: 3, h: 1.5}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1900} >
      <div key="bar">
        <h1>Face Value of Penalties - 2013</h1>
        <BarGraph data={offenceData}/>
      </div>
      <div key="pie">
        <PieGraph data={offenceData}/>
      </div>
      </ReactGridLayout>
    );
  }
}

export default Chart;