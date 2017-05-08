import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let contacts = [{
    id: 1,
    name: 'Scott',
    phone: '555 555 5555'
},{
    id: 2,
    name: 'Cat',
    phone: '123 456 7890'
},{
    id: 3,
    name: 'Bo',
    phone: '888 888 8888'
}]

ReactDOM.render(
  <App contacts={contacts}/>,
    document.getElementById('root')
);
