import React from 'react';
import TopBlock from '../components/topBlock'
import BreadCrumb from '../components/Breadcrumb'
import TaskModule from "../components/TaskModule";

function AppMain() {
  return (
    <div className="main-block">
      <TopBlock/>
      <BreadCrumb/>
      <TaskModule/>
    </div>
  );
}

export default AppMain;
