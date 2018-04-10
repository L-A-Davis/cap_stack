import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState();

export function configureStore(){
  return createStore(
    rootReducer, persistedState, composeWithDevTools(
    applyMiddleware(thunk))
  );
}




export const store = configureStore()
