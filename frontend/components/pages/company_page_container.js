import { connect } from 'react-redux';

import { requestDailyPrices } from '../../actions/stock_actions';
import CompanyPage from './company_page';

const mapStateToProps = (state) => (
  {
    timeSeriesDaily: state.entities['Time Series (Daily)'],
    errors: state.errors,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestDailyPrices: (symbol) => dispatch(requestDailyPrices(symbol)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyPage);
