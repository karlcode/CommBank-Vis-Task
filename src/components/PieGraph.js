import React from 'react';
import '../styles/App.css';
import {PieChart, Cell, ResponsiveContainer, Pie, Tooltip, Legend} from 'recharts';

const PieGraph = (props) => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF5722', '#3F51B5', '#E91E63', '#4CAF50', '#00BCD4'];
  console.log(props);
  return (
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Legend layout="vertical" verticalAlign="middle" align="right"/>
          <Pie data={props.data}  cx="50%"  cy="50%"  dataKey={props.p} nameKey="short"  fill="#8884d8" label>
          {
            props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
          </Pie>
        <Tooltip/>
        </PieChart>
        

      </ResponsiveContainer>
  );
}


export default PieGraph;