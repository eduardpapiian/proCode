import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import store from './store';
import MainPage from './containers/Main';
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from 'react-router-redux'
import ToDo from './containers/ToDo';

const history = createBrowserHistory(HashRouter, store)

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainPage} />
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App

// function App() {
//   return (
//     <Provider store={store}>
//       <MainPage />
//     </Provider>
//   );
// }
//
// export default App;
