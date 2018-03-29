import { renderComponent, expect } from '../test_helper';
import App from '../../src/root/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('Renders a Comment Box component', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
