import React, { Component } from 'react';
import './App.css';
import {makeWidthFlexible, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import offenceData from './offenceData';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);
class BarChart extends Component {
  state = {
    series: []
  }
  plotFaceValue(){
    var fvArray = []
    for(var i=0; i<offenceData.length; i++){
      var x = offenceData[i].offence
      var y = offenceData[i].fv
      fvArray.push({x,y})
    }
    console.log(fvArray)
    this.setState({series: fvArray})
  }
  plotPenalties(){
    var penalties = []
    for(var i=0; i<offenceData.length; i++){
      var x = offenceData[i].offence
      var y = offenceData[i].penalties
      penalties.push({x,y})
    }
    
    return penalties
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
            data={this.state.series}/>
        
        <XAxis />
        <YAxis />
        </FlexibleXYPlot>
      </div>
    );
  }
}

export default BarChart;