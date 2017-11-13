import React from 'react';
import './App.css';
import {PieChart, Cell, ResponsiveContainer, Pie, Tooltip, Legend} from 'recharts';

const PieGraph = (props) => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FC642D', '#00A699', '#FF5A5F' ];
  return (
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          
          <Pie data={props.data}  cx="30%"  cy="50%"  dataKey={props.y} nameKey="name"  fill="#8884d8" label>
          {
            props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
          </Pie>
          {
          props.showAll
            ? <Pie data={props.data}  cx="70%"  cy="50%"  dataKey={props.y2} nameKey="name"  fill="#8884d8" label/>
            : null
          }
          
        <Tooltip/>
        </PieChart>
        

      </ResponsiveContainer>
  );
}


export default PieGraph;