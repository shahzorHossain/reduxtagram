// rootReducer is the combination of all the reducers

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import { comments } from './comments';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
}); // we also need routing reducer for changes

export default rootReducer;
