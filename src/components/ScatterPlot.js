import React, { Component } from 'react';
import './App.css';
import {ScatterChart,  XAxis, YAxis, ZAxis, Scatter,  CartesianGrid, Tooltip, Legend} from 'recharts';
import offenceData from './offenceData';

class ScatterPlot extends Component {
  state = {
    series: []
  }
  
  render() {
    return (
      <div className="scatterPlot">
        <ScatterChart width={730} height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="offence" name="stature" unit="cm" />
          <YAxis dataKey="penalties" name="weight" unit="kg" />
          <ZAxis dataKey="fv" name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={offenceData} fill="#8884d8" />
        </ScatterChart>
      </div>
    );
  }
}

export default ScatterPlot;