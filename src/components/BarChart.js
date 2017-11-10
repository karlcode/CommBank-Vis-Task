import React, { Component } from 'react';
import './App.css';
import {makeWidthFlexible, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import offenceData from './offenceData';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);
class BarChart extends Component {
  plotFaceValue(){
    var fvArray = []
    for(var i=0; i<offenceData.length; i++){
      var x = offenceData[i].offence
      var y = offenceData[i].fv
      fvArray.push({x,y})
    }
    return fvArray
  }
  plotOffenceAmounts(){
    console.log(offenceData)
  }
  componentDidMount(){
    this.plotFaceValue()
  }
  render() {
    return (
      <div className="App">
        <FlexibleXYPlot
        height={600}
        xType="ordinal">
        
        <HorizontalGridLines />
        <VerticalBarSeries 
            data={[{x: 1, y:2}]}/>
        
        <XAxis />
        <YAxis />
        </FlexibleXYPlot>
      </div>
    );
  }
}

export default BarChart;