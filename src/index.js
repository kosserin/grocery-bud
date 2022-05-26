import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BudContext from './store/bud-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BudContext>
    <App />
  </BudContext>
);