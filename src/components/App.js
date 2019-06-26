import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div title='app-container'>
        <h1>Boilerplate!!</h1>
      </div>
    );
  }
}

export default hot(App);
