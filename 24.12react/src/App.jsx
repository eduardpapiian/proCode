import React from 'react';
import logo from './logo.svg';
import List from './List.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
    <List liList={['1', '2']}/>
    <List/>
    <List/>
    </div>
  );
}

export default App;
