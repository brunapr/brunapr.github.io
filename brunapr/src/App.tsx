import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './pages';
import './components/Cursor/cursor';
import Cursor from './components/Cursor/cursor';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header/>
        <Main/>
      </div>
      <Cursor/>
    </div>
  );
}

export default App;
