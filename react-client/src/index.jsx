import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Posts from './components/posts.jsx'
import Ratings from './components/ratings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/data/1', 
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
      <Ratings
        data={this.state.data}
      />
      <Posts
        data={this.state.data}
      />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));