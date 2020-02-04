import React from 'react'
import * as serviceWorker from './serviceWorker';
import './index.css';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import listApp from './reducers'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import App from './App';
const store = createStore(listApp, composeWithDevTools(applyMiddleware(thunk)) );
render(<App store={store} />, document.getElementById('root'));
serviceWorker.unregister();
