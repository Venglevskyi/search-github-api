import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { searchReducer } from './reducer';

const store = createStore(searchReducer, applyMiddleware(thunk, logger));

export type RootState = ReturnType<typeof searchReducer>;

export default store;
