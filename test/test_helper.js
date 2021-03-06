import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/root/reducer';
import chaiJquery from 'chai-jquery';


// Set up testing environment to run like a browser in the command line
// Initialize fake browser
global.document = jsdom.jsdom('<!doctype html><html><body><body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);



// Build 'renderComponent' helper that should render a given react class
// State is initial state for redux wrapper
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // produces HTML
  return $(ReactDOM.findDOMNode(componentInstance));
}



// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}


// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
