import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 
import { createStore } from 'redux';
import {Provider} from 'react-redux'
// import rootReducer from './services/Reducers,jsx/rootReducer';
// const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <App />
  
);

reportWebVitals();
