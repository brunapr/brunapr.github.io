import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import './utils/variables.css';
import Header from './components/header';
import Main from './pages';
import Cursor from './components/cursor/cursor';
import SlideDots from './components/dots';
import './components/cursor/cursor';
import './assets/fonts/ABeeZee/ABeeZee-Italic.ttf';
import './assets/fonts/Montserrat/Montserrat-Regular.ttf';
import './assets/fonts/Montserrat/Montserrat-Italic.ttf';
import './assets/fonts/Montserrat/Montserrat-Bold.ttf';
import { LanguageContext } from './contexts/languageContext';

function App() {
  const [ slide, setSlide ] = useState(1);
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="app">
      {
        language == null ?
        <div className="loading"/> :
        <div className="wrapper">
          <Header slide={slide} setSlide={setSlide}/>
          <SlideDots slide={slide} setSlide={setSlide}/>
          <Main slide={slide} setSlide={setSlide}/>
        </div>
      }
      <Cursor/>
    </div>
  );
}

export default App;
