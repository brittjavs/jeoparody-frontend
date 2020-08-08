import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js'

const reducer = combineReducers({
    currentUser
    // put reducers here for each action
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

export default store 