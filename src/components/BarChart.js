import React, { Component } from 'react';
import './App.css';
import {FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import offenceData from './offenceData';
import ReactGridLayout from 'react-grid-layout';

class BarChart extends Component {
  state = {
    series: []
  }
  plotFaceValue(){
    for(var i=0; i<offenceData.length; i++){
      offenceData[i].x = offenceData[i].offence
      offenceData[i].y = offenceData[i].fv
      delete offenceData[i].offence
      delete offenceData[i].fv
    }
    this.setState({series: offenceData})
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
    var layout = [
      {i: 'a', x: 0, y: 0, w: 8, h: 2},
      {i: 'b', x: 9, y: 0, w: 3, h: 2, minW: 2, maxW: 4}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1200} >
      <div className="barChart" key="a">
        <FlexibleXYPlot
        xType="ordinal">
        
        <HorizontalGridLines />
        <VerticalBarSeries 
            data={this.state.series}/>
        
        <XAxis />
        <YAxis />
        </FlexibleXYPlot>
      </div>
      <div key="b">
        <h1>Sample B</h1>
      </div>
      </ReactGridLayout>
    );
  }
}

export default BarChart;