import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

export function configureStore(){
  return createStore(
    rootReducer, composeWithDevTools(
    applyMiddleware(thunk))
  )
}

export const store = configureStore()
