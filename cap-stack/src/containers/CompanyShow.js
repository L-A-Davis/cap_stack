import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import DebtShow from './DebtShow'
import EquityShow from './EquityShow'
import PreferredShow from './PreferredShow'
import DebtList from '../components/DebtList'

class CompanyShow extends React.Component {

  componentDidMount() {
    // get stock price from API if applicable
  }

  render() {
    const company = this.props.company
    return (
      <div>
      <Switch>

      <Route exact path={`${this.props.match.url}/:debtId`} render={   (routerProps) => {return <DebtShow history={routerProps.history} /> }} />

        <Route exact path={`${this.props.match.url}/:equityId`} component={EquityShow} />
        <Route exact path={`${this.props.match.url}/:preferredId`} component={PreferredShow} />
        <Route exact path={this.props.match.url} render={() => (
            <div>
                <p> {company.name}</p>

            </div>
          )} />
     </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const company = state.capitalization.currentCompany

  if (company) {
    return { company }
  } else {
    return { company: {} };
  }
};


  export default withRouter(connect(mapStateToProps)(CompanyShow))
