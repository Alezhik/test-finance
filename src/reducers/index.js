import { combineReducers } from 'redux';
import { ADD_TRASACTION } from './actions';

const initialState = {
  transactions: [],
  balance: 0
};

function finance(state = initialState, action) {
  switch (action.type) {
    case ADD_TRASACTION:
      return [
        ...state,
        {
          transactions: [...state.transactions, ...action.transaction],
        }
      ];
    default:
      return state
  }
};

const financeApp = combineReducers({
  finance
});

export default financeApp;
