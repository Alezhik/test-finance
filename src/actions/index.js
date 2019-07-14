/*
 * action types
 */

export const ADD_TRASACTION = 'ADD_TODO';
export const GET_TRASACTION = 'TOGGLE_TODO';
export const GET_TRASACTIONS = 'TOGGLE_TODO';

/*
 * other constants
 */

 
/*
 * action creators
 */

export const addTransaction = (transaction) => {
  return { type: ADD_TRASACTION, transaction }
}

export const getTransaction = () => {
  return { type: GET_TRASACTION }
}

export const getTransactions = () => {
  return { type: GET_TRASACTIONS }
}