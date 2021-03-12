import React from 'react';
import Enzyme , { shallow }from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// Setting up Enzyme' react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without errors', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});


test('clicking on button increments counter display', () => {

});