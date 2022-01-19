import './assets/css/styles.css';
import './assets/css/login.css';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
