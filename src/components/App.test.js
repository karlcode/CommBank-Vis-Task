import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});


test('routes render without crashing', () => {
  
});

test('menu appears on hover to left of screen', () => {
  
});
