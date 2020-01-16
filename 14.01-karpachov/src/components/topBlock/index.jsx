import React, {Component} from 'react';
import './index.scss';

class topBlock extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
    console.log('will mount!!')
  }
  componentDidMount() {
    console.log('did mount!!')
  }
  render(){
    return(
      <div className="layout">
        heree i am
      </div>
    )
  }
}


export default topBlock;
