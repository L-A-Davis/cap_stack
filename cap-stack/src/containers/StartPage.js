import React from 'react';
import { Grid } from 'semantic-ui-react'
import StarterMenu from '../components/StarterMenu'
import NewCompanyForm from '../components/NewCompanyForm'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CompanyShow from './CompanyShow';


class StartPage extends React.Component {


  render () {
    return (
          <div>
               <Grid
                 textAlign='center'
                 style={{ height: '100%' }}
                 verticalAlign='top'
               >
               {!this.props.showNewCompanyForm &&
                < StarterMenu
                  history={this.props.history}
                />
               }
               <Grid.Row>
               {this.props.showNewCompanyForm &&
               < NewCompanyForm
               history={this.props.history}
               />
                }
               </Grid.Row>
               </Grid>
             </div>
    )
  }
}

  export default connect(state=> {return {currentCompany: state.capitalization.currentCompany, showNewCompanyForm: state.capitalization.showForms.showNewCompanyForm}}, {})(StartPage)


  // <Switch>
  //   <Route path={`${this.props.match.url}/:companyId`}
  //   component={CompanyShow}/>
  //   <Route exact path={this.props.match.url} render={() => (
  //     <div>
  //        <Grid
  //          textAlign='center'
  //          style={{ height: '100%' }}
  //          verticalAlign='top'
  //        >
  //        {!this.props.showNewCompanyForm &&
  //         < StarterMenu
  //           history={this.props.history}
  //         />
  //        }
  //        <Grid.Row>
  //        {this.props.showNewCompanyForm &&
  //        < NewCompanyForm
  //        history={this.props.history}
  //        />
  //         }
  //        </Grid.Row>
  //        </Grid>
  //      </div>
  //   )} />
  // </Switch>
