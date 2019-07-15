/*
 * action types
 */

export const ADD_TRASACTION = 'ADD_TODO';
export const SET_SUCCESS_ADD = 'SET_SUCCESS_ADD';

/*
 * other constants
 */

 
/*
 * action creators
 */

export const addTransaction = (transaction) => {
  return { type: ADD_TRASACTION, transaction }
}

export const setSuccessAdd = (status) => {
  return { type: SET_SUCCESS_ADD, status }
}
