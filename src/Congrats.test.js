import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr} from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure( { adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the Congrats component
 * @function setup
 * @paraps {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
};

test('renders without error', () =>{
const wrapper = setup();
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.length).toBe(1);
});

test('renders empty when success props is false', () =>{
const wrapper = setup({success: false});
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.text()).toBe('');
});

test('renders non empty when ...', () =>{
const wrapper = setup({success: true});
const message = findByTestAttr(wrapper, 'congrats-message');
expect(message.text().length).not.toBe(0);
});