import React, { Component } from 'react';
import './App.css';
import {makeWidthFlexible, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);
class BarChart extends Component {
  render() {
    return (
      <div className="App">
        <FlexibleXYPlot
        height={600}>
        
        <HorizontalGridLines />
        <VerticalBarSeries
            data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15},
            {x: 4, y: 1},
            {x: 5, y: 6}
            ]}/>
        <XAxis />
        <YAxis />
        </FlexibleXYPlot>
      </div>
    );
  }
}

export default BarChart;