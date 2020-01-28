import React from 'react'
import * as serviceWorker from './serviceWorker';
import './index.css';
import { render } from 'react-dom'
import { createStore } from 'redux'
import listApp from './reducers'
import App from './App';
const store = createStore(listApp)
render(<App store={store} />, document.getElementById('root'))
serviceWorker.unregister();
