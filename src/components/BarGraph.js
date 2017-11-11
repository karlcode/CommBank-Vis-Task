import React, { Component } from 'react';
import './App.css';
import ReactGridLayout from 'react-grid-layout';
import {ResponsiveContainer, BarChart as Stack, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class BarGraph extends Component {
  currencyFormat(values){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 2
    })    
    return formatter.format(values)
  }
  render() {
    return (
        <ResponsiveContainer width="100%" height="80%">
        <Stack data={this.props.data} margin={{top: 5, right: 30, left: 30, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="offence" />
          <YAxis dataKey="fv" tickCount={10}> 
            <Label value="Face Value ($)" position="insideLeft" angle="-90" offset={-20} />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="fv" fill="#8884d8" />
        </Stack>
        </ResponsiveContainer>
    );
  }
}

export default BarGraph;