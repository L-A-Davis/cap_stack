import React from 'react';
import { connect } from 'react-redux';


const DebtShow = ({ debt }) =>
  <div>
      <p> {this.props.debt.name} </p>
  </div>;


const mapStateToProps = (state, ownProps) => {
  const debt = state.capitalization.currentCompany.debts.find(debt => debt.id === +ownProps.match.params.debtId)

  if (debt) {
    return { debt }
  } else {
    return { debt: {} }
  }
};



  export default connect(mapStateToProps)(DebtShow)
