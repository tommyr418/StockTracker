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
      windowWidth: (window.innerWidth * 0.8) - 150,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
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

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({windowWidth: (window.innerWidth * 0.8) - 150});
  }

  handleClick(e) {
    this.setState({
      details: this.props.timeSeriesDaily[e.x],
      date: e.x,
      highlight: e.y,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='loader'>
          <DotLoader color='#cccccc'/>
        </div>
      );
    } else if (this.props.errors) {
      return (
        <div className='error'>
          <span> It seems the API is not available. </span>
          <span> Please wait a while and revisit. </span>
        </div>
      );
    } else {

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
          <div className='chart-container'>
            <LineChart
              axes
              dataPoints
              interpolate={'cardinal'}
              width={ this.state.windowWidth }
              height={ this.state.windowWidth / 2 }
              xType={'text'}
              lineColors={ ['black', 'green', 'red'] }
              grid
              clickHandler={ this.handleClick }
              data={[
                graphPriceData,
                graphHighData,
                graphLowData
              ]}/>

              <div className='key'>
                <label>Key</label>
                <span>X-axis: Date</span>
                <span>Y-axis: Price(USD)</span>
                <br></br>
                <div>
                  <i className="fas fa-square-full"
                    style={{color: 'black'}}></i>
                  <span>Opening Price</span>
                </div>
                <br></br>
                <div>
                  <i className="fas fa-square-full"
                    style={{color: 'green'}}></i>
                  <span>Daily High</span>
                </div>
                <br></br>
                <div>
                  <i className="fas fa-square-full"
                    style={{color: 'red'}}></i>
                  <span>Daily Low</span>
                </div>
              </div>
          </div>

          { this.state.details ?
            <div className='details'>
              <span>Date: {this.state.date} </span>
              <span className={
                  this.state.details['1. open'] == this.state.highlight ?
                  'highlight' : ''}
                >Opening Price: {this.state.details['1. open']} USD</span>
              <span className={
                  this.state.details['2. high'] == this.state.highlight ?
                  'highlight' : ''}>
                  Daily High: {this.state.details['2. high']} USD</span>
              <span className={
                  this.state.details['3. low'] == this.state.highlight ?
                  'highlight' : ''}>
                  Daily Low: {this.state.details['3. low']} USD</span>
              <span>Volume: {this.state.details['5. volume']}</span>
            </div> : null }
        </div>
      );
    }
  }
}

export default CompanyPage;
