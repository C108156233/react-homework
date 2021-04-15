import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './App';

  ReactDOM.render(
   <Clock date={new Date()} />,
   document.getElementById('root')
);