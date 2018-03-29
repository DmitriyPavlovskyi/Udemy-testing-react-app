import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
      <button action="submit">Submit comment</button>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ comment: '' });
  }
}

export default CommentBox;
