import React from 'react';
import { connect } from 'react-redux';
import { updateNewCompanyForm, saveNewCompany, setcurrentcompany } from '../actions';
import { Segment, Form, Grid, Header } from 'semantic-ui-react'


class NewCompanyForm extends React.Component{

  handleChange = (e) => {
    this.props.updateNewCompanyForm({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = this.props.NewCompanyForm
    this.props.saveNewCompany(formData)
    this.props.history.push(`/start/${this.props.currentCompany.id}`)
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
      <Form onSubmit={this.handleSubmit} >
      <Form.Input
        type="text"
        label="Company Ticker"
        name="Company_ticker"
        value={this.props.NewCompanyForm.Company_ticker}
        onChange={this.handleChange}
         />
      <Form.Input
        type="text"
        label="Company Name"
        name="Company_name"
        value={this.props.NewCompanyForm.Company_name}
        onChange={this.handleChange}
         />

      <Form.Button>Submit</Form.Button>
      </Form>
      </Grid>
      </Segment>
    )
  }
}

export default connect (state => {return {NewCompanyForm: state.capitalization.NewCompanyForm, currentCompany: state.capitalization.currentCompany}}, { updateNewCompanyForm, saveNewCompany, setcurrentcompany})(NewCompanyForm);
