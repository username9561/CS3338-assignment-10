import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, for styling
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Optional, for measuring performance

// Rendering the App component inside the div with id="root" from the index.html file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional, for measuring performance of your app
reportWebVitals();
