import React from 'react'
import './UserPad.scss'
import PropTypes from 'prop-types';

export default function UserPad (props) {
    return (
    <div className="user-pad">
      <p>Name:  {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <br/>
    </div>
  )
}
UserPad.defaultProps = {
  username: "Sandy",
  email: "deepblue",
  phone: '999-99-99'
}
UserPad.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
}
