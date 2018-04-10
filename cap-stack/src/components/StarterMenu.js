import React from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import NewCompanyButton from '../components/NewCompanyButton'
import SearchExistingCompanies from '../components/SearchExistingCompanies'
import { fetchExistingCompanies } from '../actions'
import { connect } from 'react-redux'

class StarterMenu extends React.Component {

  componentDidMount() {
    this.props.fetchExistingCompanies()
  }

  render() {
    return (
      <Segment raised>
        <Grid
        textAlign='center'
        centered
        style={{ maxWidth: 600 }}
        >
        <Grid.Row centered>
              <Header as="h3">
                Search Existing Companies or Add a New One
              </Header>
        </Grid.Row>
        <Grid.Row centered columns={2} textAlign='center'>
          <Grid.Column textAlign='center'>
            <SearchExistingCompanies
              history={this.props.history}
            />
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <NewCompanyButton />
          </Grid.Column>
         </Grid.Row>
      </Grid>
     </Segment>
    )
  }
}


  export default connect(state=> {return {allCompanies: state.capitalization.allCompanies}}, { fetchExistingCompanies })(StarterMenu)
