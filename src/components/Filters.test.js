import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders Header without crashing', () => {
  const div = document.createElement('div');
  render(<Header />, div);
});

describe('onChange', () => {
  test('changetime should update the year', () => {
    
  });
  test('changecategory should update categories', () => {
    
  });
});



