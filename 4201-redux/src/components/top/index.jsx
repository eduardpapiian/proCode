import React from 'react'
import './index.scss';

export default class TopBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick= this.handleClick.bind(this)

  }
  handleClick(){
    alert('hello')
  }
  render() {
    return (
      <div>
        <span onClick={this.handleClick}>+</span><span>-</span>
      </div>
    )
  }
}
