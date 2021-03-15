import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserForm from './pages/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <UserForm />
  </React.StrictMode>,
  document.getElementById('root')
);

