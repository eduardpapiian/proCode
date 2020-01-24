import React from 'react'
import {connect} from 'react-redux'

class BottomBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.appReducer.count)
  return ({
    count: state.appReducer.count
  })
}

export default connect(  mapStateToProps, null)(BottomBlock)
