import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/features/commentBox/index';

describe('Comment Box test', () => {
  let component;

  // running beforeEach in nested describe as well
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('Has a correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('Has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('Has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Entering some text', () => {
    // this beforeEach Not running in upper scope
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('Shows that text in the text area', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('When submited, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
