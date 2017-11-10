import React from 'react';
import { render } from 'react-dom';
import BarChart from './BarChart';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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

test('plotFaceValue should return an array', () => {
  const wrapper = shallow(<BarChart/>)
  expect(wrapper.instance().plotFaceValue()).toBeDefined()
});

test('y axis should be numeric values only', () => {
  
});