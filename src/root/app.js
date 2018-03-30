import React, { Component } from 'react';
import CommentBox from '../features/commentBox/index';
import CommentList from '../features/commentBox/components/commentList';

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
