import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/features/commentBox/index';

describe('Comment Box test', () => {
  const component = renderComponent(CommentBox);
  it('Has a correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('Has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('Has a button', () => {
    expect(component.find('button')).to.exist;
  });

});
