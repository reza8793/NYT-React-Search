console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import Saved from './Saved';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});