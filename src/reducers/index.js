import { combineReducers } from 'redux';

import commentsReducers from './commentsReducers';
import postReducers from './postReducers';

const rootReducer = combineReducers({
    comments: commentsReducers,
    posts: postReducers,
});

export default rootReducer;