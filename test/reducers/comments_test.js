import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/features/commentBox/AC/types';
import commentReducer from '../../src/features/commentBox/reducer';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    // eql - deep comparison
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action with type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};

    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
