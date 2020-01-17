import React, {Component} from 'react';
import rectangle from './img/Polygon.svg';
import { Transition } from 'react-transition-group';
import './index.scss';

class TaskModule extends Component {
  constructor(props){
    super(props);
    this.state = {
      in:false
    }
    this.click= this.click.bind(this)
  }
  click(){
    this.setState({
      in: !this.state.in
    })
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
          <div className="task-module_block_line">
            <div className="name-block">
              <h2>Задачи модуля</h2>
            </div>
            <div onClick={this.click} className="rectangle-block">
              <img src={rectangle} alt=""/>
            </div>
          </div>
          {/*<Transition in={this.state.in} timeout={150}>*/}
          {/*  {state => {*/}
          {/*    if(state === 'exited'){*/}
          {/*      return (*/}
          {/*        <div className={`fade fade-${state}`}>*/}
          {/*          {this.props.children}*/}
          {/*        </div>*/}
          {/*      )*/}
          {/*    }*/}
          {/*    }}*/}
          {/*</Transition>*/}
          {/*{ this.state.in ? (this.props.children) : ('')}*/}
        </div>
      </div>
    )
  }
}


export default TaskModule;
