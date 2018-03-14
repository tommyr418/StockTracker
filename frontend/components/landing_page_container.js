import { connect } from 'react-redux';

import { requestBatchQuotes } from '../actions/stock_actions';
import LandingPage from './landing_page';

const mapStateToProps = (state) => (
  {
    stockQuotes: state.entities['Stock Quotes'],
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestBatchQuotes: () => dispatch(requestBatchQuotes()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
