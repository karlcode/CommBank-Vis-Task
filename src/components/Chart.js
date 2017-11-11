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
      {i: 'bar', x: 1, y: 0, w: 7, h: 2.5},
      {i: 'pie', x: 9, y: 0, w: 4, h: 1.5},
      {i: 'third', x: 9, y: 0, w: 4, h: 1},
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1900} >
      <div className="card" key="bar">
        <h1>Face Value of Penalties - 2013</h1>
        <BarGraph data={this.props.data}/>
      </div>
      <div className="card" key="pie">
        <PieGraph data={this.props.data}/>
      </div>
      <div className="card" key="third"><h2>Third box</h2></div>
      </ReactGridLayout>
    );
  }
}

export default Chart;