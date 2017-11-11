import React, { Component } from 'react';
import './App.css';
import {makeWidthFlexible, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import offenceData from './offenceData';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);
class BarChart extends Component {
  state = {
    series: []
  }
  
  render() {
    return (
      <div className="barChart">
        <h1>Scatterplot</h1>
      </div>
    );
  }
}

export default BarChart;