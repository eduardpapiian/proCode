import React, {Component} from 'react';
import './index.scss';

class TaskModule extends Component {
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
      <div className="task-module">
        <div className="task-module_block">
          <h2><span>Задачи модуля</span></h2>
        </div>
      </div>
    )
  }
}


export default TaskModule;
