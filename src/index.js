import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let contacts = {
    name: 'Scott',
    phone: '555 555 5555'
}

ReactDOM.render(
  <App contacts={contacts}/>,
  document.getElementById('root')
);
