import React, { Component } from 'react';
import './App.css';
import offenceData from './offenceData';
import ReactGridLayout from 'react-grid-layout';
import {BarChart as Stack, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

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
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1900} >
      <div key="a">
        <Stack data={offenceData} width={1200} height={600} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="offence" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="penalties" fill="#8884d8" />
          <Bar dataKey="fv" fill="#82ca9d" />
        </Stack>
      </div>
      </ReactGridLayout>
    );
  }
}

export default BarChart;