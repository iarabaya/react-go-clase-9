import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Game from './Game';

//Con reactt 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Game/>
  </React.StrictMode>
)

// ReactDOM.render(
//   <React.StrictMode>
//     <Game/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
