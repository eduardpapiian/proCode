import React from 'react';
import logo from './logo.svg';
import Main from './containers/Main';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Main/>
    </div>
    </Provider>
  );
}

export default App;
