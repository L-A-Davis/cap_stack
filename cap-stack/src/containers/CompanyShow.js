import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import DebtShow from './DebtShow'
import EquityShow from './EquityShow'
import PreferredShow from './PreferredShow'

class CompanyShow extends React.Component {

  componentDidMount() {
    // get stock price from API if applicable
  }

  render() {
    const company = this.props.company
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.url}/:debtId`} component={DebtShow} />
          <Route path={`${this.props.match.url}/:equityId`} component={EquityShow} />
          <Route path={`${this.props.match.url}/:preferredId`} component={PreferredShow} />
          <Route exact path={this.props.match.url} render={() => (
              <div>
                  <p> company.name</p>
              </div>
            )} />
       </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const company = state.capitalization.allCompanies.find(company => company.id === ownProps.match.params.companyId)

  if (company) {
    return { company }
  } else {
    return { company: {} };
  }
};


  export default connect(mapStateToProps)(CompanyShow)
