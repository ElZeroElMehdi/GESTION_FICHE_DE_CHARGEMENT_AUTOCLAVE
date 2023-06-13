import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Routes from './components/Route';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
    {/* <App /> */}
  </React.StrictMode>
);
