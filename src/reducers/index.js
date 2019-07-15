import { combineReducers } from 'redux';
import { ADD_TRASACTION } from '../actions';

const initialState = {
  balance: 400,
  curentId: 2,
  successAdd: false,
  transactions: [{
    type: '-', // credit
    amount: 300,
    category: 'Some category',
    description: 'SOme text abotu trasaction',
    fromTo: 'bank',
    id: 1,
    date: 1563195163303
  },
  {
    type: '+', // debit
    amount: 700,
    category: 'Progect price',
    description: 'Pay you for your work',
    fromTo: 'Some Noname',
    id: 2,
    date: 1563196173303
  }]
};

function finance(state = initialState, action) {
  switch (action.type) {
    case ADD_TRASACTION:
      let amount = action.transaction.amount;
      if (action.transaction.type === '-') {
        amount = amount * -1 ;
      }
      return {
        ...state,
        transactions: [
          ...state.transactions, 
          { 
            ...action.transaction, 
            id: state.curentId + 1,
            date: Date.now()
          }
        ],
        curentId: state.curentId + 1,
        successAdd: true,
        balance: state.balance + amount
      };
    default:
      return {
        ...state,
        successAdd: false
      }
  }
};

const financeApp = combineReducers({
  finance
});

export default financeApp;
