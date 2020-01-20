import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './components/App';
import {store} from './store';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('root')
);
serviceWorker.unregister();
