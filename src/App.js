import React, { Component } from 'react';
import { connectWpPost } from 'kasia/connect';
import { Page } from 'kasia/types';
import './App.css';

class RawPage extends Component {
  render() {
    console.log('page', this.props);

    return (
      <div className="App">
        {this.props.kasia.page ? this.props.kasia.page.title.rendered : null }
      </div>
    );
  }
}

const WpPage = connectWpPost(
  Page,
  (props) => props.slug
)(RawPage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <WpPage slug="sobre"/>
      </div>
    );
  }
}

export default App;
