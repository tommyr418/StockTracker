import React from 'react';
import { DotLoader } from 'react-spinners';

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
        <div>
          <DotLoader color='#cccccc'/>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }
}

export default LandingPage;
