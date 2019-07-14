import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import financeApp from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(financeApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
