import { createStore, compose, applyMiddleware } from 'redux'
import todo from '../reducers/todo'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const store = createStore(
  todo,
  composeEnhancers(applyMiddleware(thunk))
)

export default store