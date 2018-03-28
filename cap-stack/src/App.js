import React, { Component } from 'react';
import './App.css';
import adapter from './adapter'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppHeader from './components/AppHeader'
import StartPage from './containers/StartPage'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <AppHeader />
       <Switch>
          <Route exact path="/" component={StartPage} />
          <Redirect to="/" />
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
