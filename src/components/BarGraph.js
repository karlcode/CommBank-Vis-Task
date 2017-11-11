import React, { Component } from 'react';
import './App.css';
import offenceData from './offenceData';
import ReactGridLayout from 'react-grid-layout';
import {ResponsiveContainer, BarChart as Stack, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class BarGraph extends Component {
  state = {
    series: []
  }
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
        <Stack data={offenceData} margin={{top: 5, right: 30, left: 30, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="offence" />
          <YAxis dataKey="fv"> 
            <Label value="Face Value" position="insideTopLeft" offset={20} />
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