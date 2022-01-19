import './assets/css/styles.css';
import './assets/css/login.css';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Routes } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById('root')
);
