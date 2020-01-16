import React from 'react'
import line from './img/Line.svg'
import './index.scss';

export default function BreadCrumb (props) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb_main">
        <a href="">Главная</a>
        <a href="">Академия родительского мастерства</a>
        <a href="">Модуль 12</a>
      </div>
    </div>
  )
}
