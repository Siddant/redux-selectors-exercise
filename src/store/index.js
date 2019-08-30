
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import comments from '../../data/comments'
import posts from '../../data/posts'

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const store = createStore(rootReducer, { comments, posts }, enhancers);

export default store;