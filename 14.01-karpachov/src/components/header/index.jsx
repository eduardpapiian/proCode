import React, {Component} from 'react';
import logo from './img/logo.svg';
import user from './img/user.svg';
import { Link } from 'react-router-dom';
import './index.scss';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      nav:[
        {
          name: 'Главная',
          route: '/'
        },
        {
          name: 'Материалы для Вас',
          route: '/materials'
        },
        {
          name: 'Календарь курсов',
          route: '/calendar'
        }
      ]
    }
  }
  componentWillMount(){
    console.log('will mount!!')
  }
  componentDidMount() {
    console.log('did mount!!')
  }
  render() {
    console.log('render!!!')
    return (
      <div className='header'>
        <div className='header__nav'>
          <div className='header__nav_block'>
            <img src={logo} alt="logo"/>
          </div>
          <div className="header__nav_menu_block">
            <div className='header__nav_block'>
              <ul className='menu'>
                {
                  this.state.nav.map((p, index) => (
                    <li key={index}>
                      <Link to={`${p.route}`}>{p.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='header__nav_block login-btn_block'>
              <div className='btn'><img src={user} alt="user"/> Войти</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
