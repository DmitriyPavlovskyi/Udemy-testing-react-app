import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/features/commentBox/AC/types';
import { saveComment } from '../../src/features/commentBox/AC/saveComment';

describe('actions', () => {
  describe('save comment', () => {
    it('has the correct type', () => {
      console.log(saveComment);
      const action = saveComment();

      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');

      expect(action.payload).to.equal('new comment');
    });
  });
});
