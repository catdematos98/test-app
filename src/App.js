import React, { Component } from 'react';
import logo from './logo.svg';
import ContactsList from './ContactsList.js';

import './App.css';

class App extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div className="App">
        <h1>Contacts List</h1>
        <ContactsList />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Torszxdtc get started, it <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

