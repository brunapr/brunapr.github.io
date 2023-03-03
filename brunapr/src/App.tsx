import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Main from './pages';
import Cursor from './components/cursor/cursor';
import SlideDots from './components/dots';
import './components/cursor/cursor';
import './assets/fonts/ABeeZee/ABeeZee-Italic.ttf';
import './assets/fonts/Montserrat/Montserrat-Regular.ttf';
import './assets/fonts/Montserrat/Montserrat-Italic.ttf';
import './assets/fonts/Montserrat/Montserrat-Bold.ttf';

function App() {
  const [ slide, setSlide ] = useState(1);
  
  return (
    <div className="app">
      <div className="wrapper">
        <Header/>
        <SlideDots slide={slide} setSlide={setSlide}/>
        <Main slide={slide}/>
      </div>
      <Cursor/>
    </div>
  );
}

export default App;
