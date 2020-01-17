import React from 'react';
import TopBlock from '../components/topBlock'
import BreadCrumb from '../components/Breadcrumb'
import TaskModule from "../components/TaskModule";
import FirstBlock from "../components/FirstBlock";

function AppMain() {
  return (
    <div className="main-block">
      <TopBlock/>
      <BreadCrumb/>
      <TaskModule><FirstBlock /></TaskModule>
    </div>
  );
}

export default AppMain;
