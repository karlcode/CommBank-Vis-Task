import React from 'react';
import '../styles/App.css';
import {ResponsiveContainer, BarChart as Stack, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const BarGraph = (props) => {
  return (
      <ResponsiveContainer width="100%" height="80%">
      <Stack data={props.data} margin={{top: 5, right: 30, left: 30, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="short" type="category"/>
        <YAxis dataKey={props.y} tickCount={10}> 
          <Label value={props.category} position="insideLeft" angle={-90} offset={-20} />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey={props.y} name={props.year=='All'?'2013':props.year} fill="#595BD4" />
        {
          props.showAll
            ? <Bar dataKey={props.y2} name="2014" fill="#FF6665" />
            : null
        }
      </Stack>
      </ResponsiveContainer>
  );
}


export default BarGraph;