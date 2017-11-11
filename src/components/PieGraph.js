import React, { Component } from 'react';
import './App.css';
import {PieChart, Cell, ResponsiveContainer, Pie, CartesianGrid, Tooltip, Legend} from 'recharts';
import offenceData from './offenceData';

class PieGraph extends Component {

  render() {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Legend align="right" height={36} value="fv" dataKey="offence"/>
            <Pie data={this.props.data} dataKey="fv" nameKey="name"  fill="#8884d8">
            {
              this.props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
              ))
            }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
    );
  }
}

export default PieGraph;