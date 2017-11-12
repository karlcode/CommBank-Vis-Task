import React from 'react';
import './App.css';
import {PieChart, Cell, ResponsiveContainer, Pie, Tooltip, Legend} from 'recharts';

const PieGraph = (props) => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Legend align="right" height={36} value="fv" dataKey="offence"/>
          <Pie data={props.data} dataKey="fv" nameKey="name"  fill="#8884d8">
          //{
            props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
  );
}


export default PieGraph;