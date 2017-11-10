import React, { Component } from 'react';
import './App.css';
import {makeWidthFlexible, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import offenceData from './offenceData';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);
class BarChart extends Component {
  render() {
    return (
      <div className="App">
        <FlexibleXYPlot
        height={600}
        xType="ordinal">
        
        <HorizontalGridLines />
        <VerticalBarSeries 
            data={offenceData}/>
        
        <XAxis />
        <YAxis />
        </FlexibleXYPlot>
      </div>
    );
  }
}

export default BarChart;