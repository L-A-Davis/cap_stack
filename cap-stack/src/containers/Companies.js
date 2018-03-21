import React from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react'
import StarterMenu from '../components/StarterMenu'

class Companies extends React.Component {
  render () {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='top'
      >
      < StarterMenu />
      </Grid>
    )
  }
}

export default Companies
