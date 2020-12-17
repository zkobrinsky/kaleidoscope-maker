import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import sketchReducer from './reducers/sketchReducer';
import thunk from 'redux-thunk'

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

  const rootReducer = combineReducers({
      sketches: sketchReducer
  })

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  ); 

  export default store;