import React from 'react';
import { shallow } from 'enzyme';
import Reviews from './Reviews';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('<Reviews />', () => {
    it('renders component with props', () => {
      const component = shallow(<Reviews totalReviews ProOverallRating ConOverallRating/>);
      expect(component).toMatchSnapshot();
    });
    
    it('renders component HTML', () => {
      const componentHtml = shallow(<Reviews />);
      expect(componentHtml.find('div').length).toEqual(13);
      expect(componentHtml.find('span').length).toEqual(20);
      expect(componentHtml.find('h2').length).toEqual(4);
      expect(componentHtml.find('p').length).toEqual(6);
    });
  });