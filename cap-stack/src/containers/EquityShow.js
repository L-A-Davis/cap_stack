import React from 'react';
import { connect } from 'react-redux';


class EquityShow extends React.Component {

  componentDidMount() {
  }

  render() {
    const equityShow = this.props.equity
    return (
      <p> equityShow.name</p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let equity = state.capitalization.currentCompany.equities.find(equity => equity.id === ownProps.match.params.equityId)

  if (equity) {
    return { equity }
  } else {
    return { equity: {} };
  }
};


  export default connect(mapStateToProps)(EquityShow)
