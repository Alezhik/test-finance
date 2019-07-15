import { connect } from 'react-redux';
import Info from './info';

const mapStateToProps = (state) => {
	return {
		balance: state.finance.balance
	}
};

const ConnectInfo = connect(
	mapStateToProps
)(Info);

export default ConnectInfo;