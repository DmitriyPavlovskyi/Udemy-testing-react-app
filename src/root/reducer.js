import { combineReducers } from 'redux';
import commentReducer from '../features/commentBox/reducer';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
