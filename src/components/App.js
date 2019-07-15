import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import Menu from './menu';
import ConnectTransactions from './connectTransactions';
import ConnectAddTransaction from './connectAddTransaction';

import { setSuccessAdd } from '../actions';

function App({successAdd, setSuccessAdd}) {
  if (successAdd) {
    setSuccessAdd(false);
  };

  return (
    <Router>
      <div>
        <header>
          <Menu />
        </header>
        <Route exact path="/" component={ConnectTransactions} />
        <Route path="/add" render={() => (
          successAdd ? (
            <Redirect to="/"/>
          ) : (
            <ConnectAddTransaction />
          )
        )}/>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  successAdd: state.finance.successAdd
});

const mapDispatchToProps = dispatch => {
	return {
		setSuccessAdd: status => {
			dispatch(setSuccessAdd(status))
		}
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
