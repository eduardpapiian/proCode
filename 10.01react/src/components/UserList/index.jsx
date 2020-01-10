import React, {Component} from 'react';
import './UserList.scss'
import UserPad from './UserPad'
import axios from 'axios'

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      userList:[]
    }
  }
  componentWillMount(){
    console.log('will mount!!')
  }
  componentDidMount() {
    console.log('did mount!!')
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log('response', response.data)
        this.setState({
          userList: response.data
        })
      })
      .catch(error => {
        console.log('An error occurred:', error)
      })
  }
  render() {
    console.log('render!!!')
    return (
      <div className='user-list'>
        User List
        {this.state.userList.map((el, index) => <UserPad username={el.username} email={el.email} phone={el.phone} key={index}/>)}
      </div>
    );
  }
}

export default UserList;
