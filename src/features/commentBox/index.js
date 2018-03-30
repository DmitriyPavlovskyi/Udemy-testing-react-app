import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// * importing all AC from file
import * as actions from './AC/saveComment';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button action="submit">Submit comment</button>
        </div>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }
}

export default connect(null, actions)(CommentBox);
