import React from 'react';
import './App.css';
import {ScatterChart, ResponsiveContainer,  XAxis, YAxis, ZAxis, Scatter,  CartesianGrid, Tooltip, Legend} from 'recharts';

const ScatterPlot = (props) =>{
  return (
    <ResponsiveContainer width="100%" height="80%">
      <ScatterChart
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="short" name="Offence" />
        <YAxis dataKey="fv" name="# of Penalties"/>
        <ZAxis dataKey="penalties" name="Face Value" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="2013" data={props.data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}


export default ScatterPlot;