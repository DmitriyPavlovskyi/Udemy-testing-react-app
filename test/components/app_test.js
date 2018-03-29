import { renderComponent, expect } from '../test_helper';
import App from '../../src/root/app';

describe('App', () => {
  it('Shows the correct text', () => {
    // Create an instance of app
    const component = renderComponent(App);

    expect(component).to.contain('Hello World!')
  });
});
