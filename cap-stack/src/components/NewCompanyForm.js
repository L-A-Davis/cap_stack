import React from 'react';
import { connect } from 'react-redux';
import { updateNewCompanyForm, saveNewCompany } from '../actions';
import { Segment, Form } from 'semantic-ui-react'


class NewCompanyForm extends React.Component{

  handleChange = (e) => {
    this.props.updateNewCompanyForm({
      [e.target.name]: e.target.value
    })
  }

  render (){
    return (
      <Segment raised>
      <Form>
      <Form.Input fluid label="Company Name" name="Company_name" />
      <Form.Input fluid label="Company Ticker" name="Company_ticker" />
      <Form.Button>Submit</Form.Button>
      </Form>
      </Segment>
    )
  }
}

export default connect (state => {return {NewCompanyForm: state.capitalization.NewCompanyForm}}, { updateNewCompanyForm, saveNewCompany})(NewCompanyForm);
