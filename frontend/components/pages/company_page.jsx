import React from 'react';
import { DotLoader } from 'react-spinners';

const SYMBOL_MAP = {
  'microsoft': 'MSFT',
  'facebook': 'FB',
  'apple': 'AAPL',
  'google': 'GOOGL',
  'amazon': 'AMZN',
};

class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.requestDailyPrices(
      SYMBOL_MAP[this.props.location.pathname.slice(1)]
    ).then(
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='loader'>
          <DotLoader color='#cccccc'/>
        </div>
      );
    } else {
      return (
        <div className='company-page'>

        </div>
      );
    }
  }
}

export default CompanyPage;
