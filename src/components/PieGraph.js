import React, { Component } from 'react';
import './App.css';
import {PieChart, ResponsiveContainer, Pie, CartesianGrid, Tooltip, Legend} from 'recharts';
import offenceData from './offenceData';

class PieGraph extends Component {

  render() {
    return (
        <ResponsiveContainer>
          <PieChart>
            <Legend align="right" height={36}/>
            <Pie data={this.props.data} dataKey="fv" nameKey="name"  fill="#8884d8" />
          </PieChart>
        </ResponsiveContainer>
    );
  }
}

export default PieGraph;