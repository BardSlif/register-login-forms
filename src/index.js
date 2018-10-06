import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter basename='/register-login-forms/'><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
