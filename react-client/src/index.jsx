import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/data', 
      success: (data) => {
        this.setState({
          data: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));