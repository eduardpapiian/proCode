import React from 'react';
import TopBlock from '../components/topBlock'
import BreadCrumb from '../components/Breadcrumb'
import TaskModule from "../components/TaskModule";
import FirstBlock from "../components/FirstBlock";
import SecondBlock from "../components/SecondBlock";
import './index.scss';


function AppMain() {
  return (
    <div className="main-block">
      <TopBlock/>
      <BreadCrumb/>
      <TaskModule title={'Задачи модуля'}><FirstBlock /></TaskModule>
      <div className="main-block__try">
        <TaskModule title={'Проработать'}><SecondBlock/></TaskModule>
      </div>
    </div>
  );
}

export default AppMain;
