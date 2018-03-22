import React from 'react';
import { Grid } from 'semantic-ui-react'
import StarterMenu from '../components/StarterMenu'
import NewCompanyForm from '../components/NewCompanyForm'

class Companies extends React.Component {
  render () {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='top'
      >
      < StarterMenu />
      <Grid.Row>
      < NewCompanyForm />
      </Grid.Row>
      </Grid>
    )
  }
}

export default Companies
