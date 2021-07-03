import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import 'font-awesome/less/font-awesome.less';
import 'react-fontawesome';
  
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));

