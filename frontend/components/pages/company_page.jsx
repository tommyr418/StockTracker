import React from 'react';
import { DotLoader } from 'react-spinners';
import { LineChart } from 'react-easy-chart';

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
    }

    const dataArray = Object.keys(this.props.timeSeriesDaily)
    .slice(0, 10).reverse();

    const graphPriceData = dataArray.map((date) => {
      return (
        { x: date, y: Number(this.props.timeSeriesDaily[date]['1. open']) }
      );
    });

    const graphHighData = dataArray.map((date) => {
      return (
        { x: date, y: Number(this.props.timeSeriesDaily[date]['2. high']) }
      );
    });

    const graphLowData = dataArray.map((date) => {
      return (
        { x: date, y: Number(this.props.timeSeriesDaily[date]['3. low']) }
      );
    });

    return (
      <div className='company-page'>
        <label> Prices for the Last 10 Trade Days</label>
        <LineChart
          axes
          dataPoints
          axisLabels={ {x: 'Date', y: 'Price (USD)'} }
          interpolate={'cardinal'}
          width={ 750 }
          height={ 400 }
          xType={'text'}
          grid
          data={[
            graphPriceData,
            graphHighData,
            graphLowData
          ]}/>
      </div>
    );
  }
}

export default CompanyPage;
