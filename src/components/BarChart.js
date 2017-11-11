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
    offenceData.map((data)=> {
      fvArray.x = data.offence
      fvArray.y = data.fv
      //console.log(fvArray)
    })
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
      <div className="barChart">
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