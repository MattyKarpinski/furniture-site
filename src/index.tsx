import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/features/scroll-to-top/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop></ScrollToTop>
  <HelmetProvider>
    <App />
  </HelmetProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
