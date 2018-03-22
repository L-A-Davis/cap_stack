import React from 'react'
import { Form }  from 'semantic-ui-react'
import { updateCompanySearch,  setCurrentCompany } from '../actions'
import { connect } from 'react-redux'

class SearchExistingCompanies extends React.Component {

  handleChange = (e) => {
    this.props.updateCompanySearch({
      CompanyToSearchFor: e.target.value
    })
  }

 handleCompanySearch = () => {
   let companies = this.props.allCompanies
   let search = this.props.CompanyToSearchFor
   let answer =  companies.find(company => company.name === search || company.ticker === search)
   return answer
 }

 handleSubmit = (e) => {
   e.preventDefault();
   let company = this.handleCompanySearch(); this.props.setCurrentCompany(company)
 }


  render() {
    return (
      <div className="Starter-Page-Item">
      <Form onSubmit={this.handleSubmit}>
       <Form.Group>
        <Form.Input
        placeholder='Search...'
        type='text'
        value={this.props.CompanyToSearchFor}
        onChange={this.handleChange} />
        <Form.Button type='Submit'>Search</Form.Button>
        </Form.Group>
        </Form>
      </div>
    )
  }
}

export default connect (state => {return { CompanyToSearchFor: state.capitalization.CompanyToSearchFor, allCompanies:state.capitalization.allCompanies}}, { updateCompanySearch,  setCurrentCompany})(SearchExistingCompanies);


// this.props.history.push('/:company_id')
