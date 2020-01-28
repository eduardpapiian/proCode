import React from 'react';
import {connect} from 'react-redux'
class Counter extends React.Component {
  increment = () => {
   this.props.dispatch({type: 'HANDLE_INC'})
  }

  decrement = () => {
    this.props.dispatch({type: 'HANDLE_DEC'})
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
