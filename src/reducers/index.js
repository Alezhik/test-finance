import { combineReducers } from 'redux';
import { ADD_TRASACTION } from '../actions';

const initialState = {
  transactions: [{
    type: '-', // credit
    amount: 300,
    category: 'Some category',
    description: 'SOme text abotu trasaction',
    fromTo: 'bank',
    id: '1'
  },
  {
    type: '', // debit
    amount: 700,
    category: 'Progect price',
    description: 'Pay you for your work',
    fromTo: 'Some Noname',
    id: '2'
  }],
  balance: 400
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
