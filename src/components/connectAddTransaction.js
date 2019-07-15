import { connect } from 'react-redux';
import { addTransaction } from '../actions';
import AddTransaction from './addTransaction';

const mapStateToProps = state => {
	return {
		successAdd: state.finance.successAdd
	}
};

const mapDispatchToProps = dispatch => {
	return {
		add: transaction => {
			dispatch(addTransaction(transaction))
		}
	}
};

const ConnectAddTransaction = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTransaction);

export default ConnectAddTransaction;
