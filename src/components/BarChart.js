import React, { Component } from 'react';
import './App.css';
import offenceData from './offenceData';
import ReactGridLayout from 'react-grid-layout';
import {ResponsiveContainer, BarChart as Stack, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import PieGraph from './PieGraph'
class BarChart extends Component {
  state = {
    series: []
  }

  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 8, h: 2},
      {i: 'b', x: 9, y: 0, w: 3, h: 2, minW: 2, maxW: 4}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={300} width={1900} >
      <div key="a">
        <h1> Title</h1>
        <ResponsiveContainer width="100%" height="80%">
        <Stack data={offenceData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="offence" />
          <YAxis dataKey="fv" unit="$" />
          <Tooltip />
          <Legend />
          <Bar dataKey="fv" fill="#8884d8" />
        </Stack>
        </ResponsiveContainer>
      </div>
      <PieGraph/>
      </ReactGridLayout>
    );
  }
}

export default BarChart;