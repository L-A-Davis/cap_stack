import React from 'react';
import { connect } from 'react-redux';


class PreferredShow extends React.Component {

  componentDidMount() {
  }

  render() {
    const preferredShow = this.props.preferred
    return (
      <p> preferredShow.name</p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let preferred = state.capitalization.currentCompany.preferreds.find(preferred => preferred.id === +ownProps.match.params.preferredId)

  if (preferred) {
    return { preferred }
  } else {
    return { preferred: {} };
  }
};


  export default connect(mapStateToProps)(PreferredShow)
