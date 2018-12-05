import React from 'react';
import { shallow } from 'enzyme';
import GridTwo from './GridTwo';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('<GridTwo />', () => {
    it('renders component with props', () => {
        const component = shallow(<GridTwo props />);
        expect(component).toMatchSnapshot();
    });

    it('renders component HTML', () => {
        const componentHtml = shallow(<GridTwo />);
        expect(componentHtml.find('div').length).toEqual(12);
        expect(componentHtml.find('section').length).toEqual(5);
        expect(componentHtml.find('p').length).toEqual(2);
        expect(componentHtml.find('span').length).toEqual(7);
        expect(componentHtml.find('button').length).toEqual(3);
        expect(componentHtml.find('h1').length).toEqual(1);
    });

    it('should call incrementQuantiry when the add button is clicked', () => {
        const wrapper = shallow(<GridTwo />);
        jest.spyOn(instance, 'incrementQuantiry');
        wrapper.find('button').simulate('click');
        expect(instance.incrementQuantiry).toHaveBeenCalledWith(two);
        expect(wrapper.state('counter')).toBe(2);
    });
  });