import React from 'react';
// import logo from './logo.svg';
import Header from './components/header';
import AppMain from './containers/AppMain';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Route exact path='/'>
        {AppMain}
      </Route>
      </Router>
    </div>
  );
}

export default App;
