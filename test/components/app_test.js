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

  it('Shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
