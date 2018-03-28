import React from 'react'
import { Search, Grid, Header, Form }  from 'semantic-ui-react'
import { setCurrentCompany } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
// need to install lodash

class SearchExistingCompanies extends React.Component {


  componentWillMount() {
     this.resetComponent()
   }

 resetComponent = () => this.setState({
   isLoading: false,
   results: [],
   value: '' })

 handleResultSelect = (e, { result }) => {
    this.setState({
     value: result
   })
   this.props.setCurrentCompany(this.state.value)
 }

 handleSearchChange = (e, { value }) => {
     this.setState({
       isLoading: true,
       value
     })

     setTimeout(() => {
       if (this.state.value.length < 1 ) return this.resetComponent()

       const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
       const isMatch = result => re.test(result.name) || re.test(result.ticker)

       this.setState({
         isLoading: false,
         results: _.filter(this.props.allCompanies, isMatch),
       })
     }, 300)
   }

 handleSubmit = (e) => {
   e.preventDefault();
   let company = this.handleCompanySearch(); this.props.setCurrentCompany(company)
 }


  render() {
    const { isLoading, value, results } = this.state

    return (
      <div className="Starter-Page-Item">
      <Grid>
       <Grid.Column width={8}>
        <Search
          loading={isLoading}
          onResultsSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
          results={results}
          value={value}
          {...this.props}
          />
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

export default connect (state => {return {  allCompanies:state.capitalization.allCompanies}}, {  setCurrentCompany})(SearchExistingCompanies);

// need to add this to results selection
// this.props.history.push('/:company_id')

// handleCompanySearch = () => {
//   let companies = this.props.allCompanies
//   let search = this.props.CompanyToSearchFor
//   let answer =  companies.find(company => company.name === search || company.ticker === search)
//   return answer
// }
// CompanyToSearchFor: state.capitalization.CompanyToSearchFor,
// updateCompanySearch,


// handleChange = (e) => {
//   this.props.updateCompanySearch({
//     CompanyToSearchFor: e.target.value
//   })
// }
//
// <div className="Starter-Page-Item">
// <Form onSubmit={this.handleSubmit}>
//  <Form.Group>
//   <Form.Input
//   placeholder='Search...'
//   type='text'
//   value={this.props.CompanyToSearchFor}
//   onChange={this.handleChange} />
//   <Form.Button type='Submit'>Search</Form.Button>
//   </Form.Group>
//   </Form>
// </div>
