import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/Hooks/ScrollTop';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);