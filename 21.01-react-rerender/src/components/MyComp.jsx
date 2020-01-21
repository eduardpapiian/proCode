import React, {Component} from 'react';

class MyComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: {
        a: 1
      }
    }
    this.onChange=this.onChange.bind(this)
  }
  componentWillMount(){
    console.log('will mount!!')
  }
  componentDidMount() {
    console.log('did mount!!')
  }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     if(Number(nextState.count) > 10 ){
  //       return false
  //     }else{
  //       return true
  //     }
  // }
  onChange(e){
    this.setState({
      count:{
        a: e.target.value
      }
    })
  }
  render() {
    console.log('here', this.state.count)
    return (
      <div>
        <input value={this.state.count.a} type="text" onChange={this.onChange}/>
        <br/>
        {this.state.count.a}
      </div>
    )
  }
}

export default MyComp;

