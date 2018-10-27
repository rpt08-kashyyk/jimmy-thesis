import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Posts from './components/posts.jsx'
import Ratings from './components/ratings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      ids: []
    }
    this.reviewStars = this.reviewStars.bind(this);
    this.setProperty = this.setProperty.bind(this);
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
    $.ajax({
      url: '/data/', 
      success: (data) => {
        this.setState({
          ids: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  reviewStars(num) {
    var full = 'https://i.imgur.com/f4lW7l6.jpg';
    var half = 'https://i.imgur.com/qrFidbO.jpg';
    var empty = 'https://i.imgur.com/eOIxGeh.jpg';
    if (num === 5) {
      return (
        <div>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
        </div>
      )
    }
    if (num === 4.5) {
      return (
        <div>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={half} height="20" width="20"/>
        </div>
      )
    }
    if (num === 4) {
      return (
        <div>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={empty} height="20" width="20"/>
        </div>
      )
    }
    if (num === 3.5) {
      return (
        <div>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={half} height="20" width="20"/>
          <img src={empty} height="20" width="20"/>
        </div>
      )
    }
    if (num === 3) {
      return (
        <div>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={empty} height="20" width="20"/>
          <img src={empty} height="20" width="20"/>
        </div>
      )
    }
  }

  setProperty (id) {
    $.ajax({
      url: '/data/' + id, 
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
      <select onChange={(e) => this.setProperty(parseInt(e.target.value))}>
        {this.state.ids.map((property, i)=>
            <option key={i + 1}>{property._id}</option>
          )
        }
      </select>
      <Ratings
        data={this.state.data}
        star={this.reviewStars}
      />
      <Posts
        data={this.state.data}
      />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));