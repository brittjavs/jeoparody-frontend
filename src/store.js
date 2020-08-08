import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import userReducer from './reducers/user'

const reducer = combineReducers({
    user: userReducer
    // put reducers here for each action
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

export default store 