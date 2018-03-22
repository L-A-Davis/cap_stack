import React from 'react';
import { connect } from 'react-redux';
import { updateNewCompanyForm, saveNewCompany } from '../actions';
import { Segment, Form, Grid, Header } from 'semantic-ui-react'


class NewCompanyForm extends React.Component{

  handleChange = (e) => {
    this.props.updateNewCompanyForm({
      [e.target.name]: e.target.value
    })
  }

  render (){
    return (
      <Segment raised >
      <Header as='h3'>Add a Company
      </Header>
      <Grid
        textAlign='center'
        centered
        style={{ maxWidth: 600 }}>
      <Form>
      <Form.Input label="Company Name" name="Company_name" />
      <Form.Input label="Company Ticker" name="Company_ticker" />
      <Form.Button>Submit</Form.Button>
      </Form>
      </Grid>
      </Segment>
    )
  }
}

export default connect (state => {return {NewCompanyForm: state.capitalization.NewCompanyForm}}, { updateNewCompanyForm, saveNewCompany})(NewCompanyForm);
