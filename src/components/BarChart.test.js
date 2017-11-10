import React from 'react';
import { render } from 'react-dom';
import BarChart from './BarChart';

test('renders BarChart without crashing', () => {
  const div = document.createElement('div');
  render(<BarChart />, div);
});

test('should show figures on hover of node', () => {
  
});

test('should accept an array of data points', () => {
  
});

test('should show new chart on click of node', () => {
  
});
