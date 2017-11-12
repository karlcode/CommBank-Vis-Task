import React from 'react';
import './App.css';
import {ResponsiveContainer, BarChart as Stack, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const BarGraph = (props) => {
  console.log(props)
  return (
      <ResponsiveContainer width="100%" height="80%">
      <Stack data={props.data} margin={{top: 5, right: 30, left: 30, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="short" type="category"/>
        <YAxis dataKey={props.y} tickCount={10}> 
          <Label value="Face Value ($)" position="insideLeft" angle={-90} offset={-20} />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey={props.y} name="2013" fill="#8884d8" />
        {
          props.childVisible
            ? <Bar dataKey={props.y2} name="2014" fill="#8884d8" />
            : null
        }
      </Stack>
      </ResponsiveContainer>
  );
}


export default BarGraph;