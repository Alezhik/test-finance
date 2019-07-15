import { connect } from 'react-redux';
import Transactions from './transactions';

const mapStateToProps = (state) => {
	return {
		transactions: state.finance.transactions
	}
};

const ConnectTransactions = connect(
	mapStateToProps
)(Transactions);

export default ConnectTransactions;
