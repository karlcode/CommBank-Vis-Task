import React, { Component } from 'react';
import './App.css';
import {PieChart, Pie, CartesianGrid, Tooltip, Legend} from 'recharts';
import offenceData from './offenceData';

class PieGraph extends Component {
  state = {
    series: []
  }
  
  render() {
    return (
      <div className="pieGraph">
        <PieChart width={730} height={250}>
          <Pie data={offenceData} dataKey="fv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          
        </PieChart>
      </div>
    );
  }
}

export default PieGraph;