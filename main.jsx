import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import App from './src/components/App.jsx';
import "babel-core/register";
import "babel-polyfill";

ReactDOM.render(<App />, document.getElementById('app'));