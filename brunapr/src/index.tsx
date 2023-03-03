import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MouseContextProvider from './contexts/mouseContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>
);
