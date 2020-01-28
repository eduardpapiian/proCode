import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import MainPage from './containers/Main';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:id?" component={MainPage} />
    </Router>
  </Provider>
)
App.propTypes = {
  store: PropTypes.object.isRequired
}

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
