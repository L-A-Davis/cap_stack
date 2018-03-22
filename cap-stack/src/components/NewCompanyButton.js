import React from 'react';
import { Button } from 'semantic-ui-react';
import { showNewCompanyForm } from '../actions'
import { connect } from 'react-redux'

class NewCompanyButton extends React.Component {

  handleClick = (e) => {
    this.props.showNewCompanyForm()
  }

  render (){
    return (
      <div className="Starter-Page-Item">
        <Button onClick={this.handleClick} >Add New Company</Button>
      </div>
    )
  }
}

export default connect (state => {return {}}, { showNewCompanyForm })(NewCompanyButton);
