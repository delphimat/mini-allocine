import { AnyAction, combineReducers } from 'redux';
import {TestTypes, ActionTypes, ITestState} from './types';

export const defaultState: ITestState = {
  items: [],
  movies: []
};

export const testReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case TestTypes.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = {...state};
      newState.items.push(newItem);
      return newState;
    }

    case TestTypes.DELETE_ITEM: {
      let newState = {...state};
      let index = newState.items.findIndex((item) =>  item.id === action.payload);
      newState.items.splice(index, 1);
      return newState;
    }

    case TestTypes.BATCH_ADD_ITEMS: {
      let newState = {...state};
      newState.movies.concat(action.payload);
      return newState;
    }

    case ActionTypes.MOVIE_RESPONSE: {
      let newState = {...state};
      newState.movies.concat(action.payload);
      return newState;
    }

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
    testReducer
})