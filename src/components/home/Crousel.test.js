import React from 'react';
import { shallow } from 'enzyme';
import Crousel from './Crousel';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('<Crousel />', () => {
    it('renders component with props', () => {
      const component = shallow(<Crousel props/>);
      expect(component).toMatchSnapshot();
    });
    
    it('renders component HTML', () => {
      const componentHtml = shallow(<Crousel />);
      expect(componentHtml.find('div').length).toEqual(5);
      expect(componentHtml.find('p').length).toEqual(2);
      expect(componentHtml.find('span').length).toEqual(2);
      expect(componentHtml.find('img').length).toEqual(2);
      expect(componentHtml.find('i').length).toEqual(2);
    });
  });