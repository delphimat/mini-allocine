import {TestTypes} from './types';

// actions
export const createItem = (task: any) => ({
    type: TestTypes.CREATE_ITEM,
    payload: task
});
  
export const deleteItem = (id: any) => ({
    type: TestTypes.DELETE_ITEM,
    payload: id
});

export const addMovies = (movies: any) => ({
    type: TestTypes.BATCH_ADD_ITEMS,
    payload: movies
});

export default {
    createItem,
    deleteItem
};