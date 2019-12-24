import React from 'react';

export default  function (props) {
  const { liList } = props
  const lis = liList && typeof (liList) !== 'string' && liList.length > 0? liList.map(el => {
    return <li>{el}</li>
  }) : null
  return(
    <ul>{lis}</ul>
  )
}
