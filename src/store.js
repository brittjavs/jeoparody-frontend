import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js';
import categoriesReducer from './reducers/categoriesReducer';
import cluesReducer from './reducers/cluesReducer';

const reducer = combineReducers({
  currentUser,
  categories: categoriesReducer,
  clues: cluesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
