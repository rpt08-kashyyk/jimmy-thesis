import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Posts from './components/posts.jsx';
import Ratings from './components/ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      ids: [],
      search: []
    }
    this.reviewStars = this.reviewStars.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.search = this.search.bind(this);
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
    var full = 'https://i.imgur.com/gPywEat.gif';
    var half = 'https://i.imgur.com/sP8vQe1.gif';
    var empty = 'https://i.imgur.com/crXE6xw.gif';
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

  search (string) {
    fetch('/comments/' + string)
    .then((res) => res.json())
    .then((data) =>this.setState({
      search: data
    }));
  }

  render () {
    return (
      <div>
      <select onChange={(e) => this.setProperty(parseInt(e.target.value))}>
      <option defaultValue>Select Property</option>
        {this.state.ids.map((property, i)=>
            <option key={i + 1}>{property._id}</option>
          )
        }
      </select>
      <Ratings
        data={this.state.data}
        star={this.reviewStars}
        search={this.search}
      />
      <Posts
        data={this.state.data}
      />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));