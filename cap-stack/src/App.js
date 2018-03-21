import React, { Component } from 'react';
import './App.css';
import adapter from './adapter'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader'
import Companies from './containers/Companies'

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppHeader />
       <Companies />
      </div>
    );
  }
}

export default App;
