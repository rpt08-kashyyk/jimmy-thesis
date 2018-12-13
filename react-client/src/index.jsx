import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Posts from './components/posts.jsx';
import Ratings from './components/ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      messages: [],
      property: [],
      search: [],
      test: []
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
          property: data
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
    $.ajax({
      url: '/message/', 
      success: (data) => {
        this.setState({
          messages: data
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
        <div className="star">
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
        <div className="star">
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
        <div className="star">
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
        <div className="star">
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
        <div className="star">
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={full} height="20" width="20"/>
          <img src={empty} height="20" width="20"/>
          <img src={empty} height="20" width="20"/>
        </div>
      )
    }
  }

  setProperty(id) {
    $.ajax({
      url: '/data/' + id, 
      success: (data) => {
        this.setState({
          property: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search(id, string) {
    fetch('/message/' + id + '?' + string)
    .then((res) => res.json())
    .then((data) =>this.setState({
      test: data
    }));
  }

  render() {
    return (
      <div>
      <form>
        <input
        placeholder="property id"
        onChange={(e) => 
          $.ajax({
            url: '/data/' + e.target.value, 
            success: (data) => {
              this.setState({
                property: data
              })
            },
            error: (err) => {
              console.log('err', err);
            }
          })}
        />
      </form>
      <Ratings
        property={this.state.property}
        star={this.reviewStars}
        search={this.search}
      />
      <Posts
        property={this.state.property}
      />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));