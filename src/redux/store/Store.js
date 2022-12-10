import { createStore, compose, applyMiddleware } from 'redux';

import { mainReducer } from '../reducer/Reducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default myStore;