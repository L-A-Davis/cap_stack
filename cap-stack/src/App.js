import React, { Component } from 'react';
import './App.css';
import adapter from './adapter'
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader'
import StartPage from './containers/StartPage'
import CompanyShow from './containers/CompanyShow'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <AppHeader />
       <Switch>
          <Route exact path="/start/:companyId" render={ (routerProps) => {
            return <CompanyShow
            history={routerProps.history} /> }} />
          <Route exact path="/start" render={ (routerProps) => {
            return <StartPage
            history={routerProps.history} /> }} />
          <Redirect exact from="/" to="/start" />
       </Switch>
      </div>
      </Router>
    );
  }
}

export default withRouter(App);

// <Redirect to="/start" />
