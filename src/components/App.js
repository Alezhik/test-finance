import React from 'react';
import './App.css';

import Menu from './menu';
import Info from './info';
import ConnectTransactions from './connectTransactions';

function App() {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <Info />
      <ConnectTransactions />
    </div>
  );
}

export default App;
