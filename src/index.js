import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './js/store/index'
import App from './App'; 
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
