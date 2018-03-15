import React from 'react';
import { DotLoader } from 'react-spinners';

import CurrentPrice from '../modules/current_price';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.requestBatchQuotes().then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='loader'>
          <DotLoader color='#cccccc'/>
        </div>
      );
    } else {
      const batchQuotes = this.props.stockQuotes.map((quote, idx) => {
        return (
          <CurrentPrice key={ idx } quote={ quote }/>
        );
      });

      return (
        <div className='landing-page'>
          { batchQuotes }
        </div>
      );
    }
  }
}

export default LandingPage;
