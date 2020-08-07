import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index'

let middleware = [thunkMiddleware];

if (process.env.REACT_APP_NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    middleware = [...middleware, logger];
  }

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

export default store;
