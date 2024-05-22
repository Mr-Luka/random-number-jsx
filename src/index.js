import React from 'react';
import ReactDOM from 'react-dom';
import RandomApp from './randomApp';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RandomApp max={80} />
  </React.StrictMode>
);