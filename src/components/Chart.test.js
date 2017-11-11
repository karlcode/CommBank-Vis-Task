import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders Chart without crashing', () => {
  const div = document.createElement('div');
  render(<Chart />, div);
});


test('should show new chart on click of node', () => {
  
});


