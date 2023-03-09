import { useEffect, useState } from "react";
import './styles.css';
import Home from "./home/index";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

// import Slider from "react-slick";
// import { render } from "@testing-library/react";

export default function Main(
    props: {
      slide: number,
      setSlide: React.Dispatch<React.SetStateAction<number>>,
    }
  ) {

  const [ settings, setSettings ] = useState(Object);

  return(
    <div id="slide" className="slide-wrapper">
      <div className="main-slide">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}