import React from 'react';
import { render } from 'react-dom';
import Filters from './filters';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Filters/>', ()=> {
  let props
  let mountedFilters
  const filters = () => {
    if (!mountedFilters) {
      mountedFilters = mount(
        <Filters {...props} />
      );
    }
    return mountedFilters;
  }
  beforeEach(() => {
    props = {
      year: undefined,
      category: undefined,
    };
  });

  test('renders Filters without crashing', () => {
    const div = document.createElement('div');
    render(<Filters />, div);
  });

  test('Should render successfully', () => {
    const component = shallow(<Filters />);
    expect(component.exists()).toEqual(true);
  });

  test('always renders 2 DropDownMenus', () => {
    expect(filters().find('DropDownMenu').length).toBe(2);

  });
  test('DropdownMenus to contain MenuItems', () => {
    expect(filters().find('MuiThemeProvider').length).toBe(2)

  });

})




