import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/features/commentBox/components/commentList';

describe('Comment List', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['First comment', 'Second comment', 'Third comment'] };
    // third parameter in renderComponent taking object of properties which passes through props to component
      component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('First comment');
    expect(component).to.contain('Second comment');
    expect(component).to.contain('Third comment');
  });
});
