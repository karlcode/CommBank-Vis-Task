import React from 'react';
import { render } from 'react-dom';
import {App} from './App';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import offenceTotal from '../utils/offenceTotal';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />)

describe('<App/>', ()=> {
  
  test('<ChangeFilters/> is rendered', () => {
    expect(wrapper.find('ChangeFilters'))
  });
  test('2 instances of <Link/>', () => {
    expect(wrapper.find('Link').length).toBe(2)
  });
  },
  describe('offences dataset', ()=>{
    test('contains 8 categories', () => {
      expect((offenceTotal).length).toBe(8)
    });
    test('dataset contains the offence key', () => {
      for (var i = 0; i<offenceTotal.length; i++){
        expect(offenceTotal[i]['offence'])
      }
    });
  })
)
