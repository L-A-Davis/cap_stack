import React, { Component } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import NewCompanyButton from '../components/NewCompanyButton'
import SearchExistingCompanies from '../components/SearchExistingCompanies'

export default class StarterMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment raised>
        <Grid
        textAlign='center'
        centered
        style={{ maxWidth: 500 }}
        >
        <Grid.Row centered>
              <Header as="h3">
                Search Existing Companies or Add a New One
              </Header>
        </Grid.Row>
        <Grid.Row centered columns={2} textAlign='center'>
          <Grid.Column textAlign='center'>
            <SearchExistingCompanies />
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
