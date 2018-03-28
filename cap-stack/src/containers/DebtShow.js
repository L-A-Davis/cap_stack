import React from 'react';
import { connect } from 'react-redux';


const DebtShow = ({ pig }) =>
  <div>
      <p> this.props.pig.name</p>
  </div>;


const mapStateToProps = (state, ownProps) => {
  const pig = state.capitalization.currentCompany.debts.find(debt => debt.id === +ownProps.match.params.debtId)

  if (pig) {
    return { pig }
  } else {
    return { pig: {} }
  }
};



  export default connect(mapStateToProps)(DebtShow)
