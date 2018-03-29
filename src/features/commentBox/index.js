import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentBox extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="comment-box">
        <textarea />
        <button>Submit comment</button>
      </div>
    );
  }
}

export default CommentBox;
