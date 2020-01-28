import React from 'react';
import {connect} from 'react-redux'

class Bottom extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.count}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(Bottom);
