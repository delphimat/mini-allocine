import {createStore} from 'redux';
import {rootReducer} from './reducer'; // defaultState, 

export const configureStore = () => {
  return createStore(
    rootReducer,
    {},
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
}