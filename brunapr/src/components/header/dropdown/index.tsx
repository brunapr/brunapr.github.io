import { useState } from "react";
import Hover from "../../cursor";
import './styles.css';

export default function Dropdown(
    props: {
      click: boolean,
      setClick: React.Dispatch<React.SetStateAction<boolean>>,
      slide: number,
      setSlide: React.Dispatch<React.SetStateAction<number>>,
    }
  ) {

  const [ lang, setLang ] = useState("PT-BR");

  function goTo(slide: string) {
    props.setClick(false);
    props.setSlide(
      slide == "home" ? 1 : 
      slide == "about" ? 2 :
      slide == "projects" ? 3 : 4);
    const scroll = document.getElementById(slide);
    scroll!.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return(
    <div className="dropdown">
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("home")}}
        >home</div>
      </Hover>
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("about")}}
        >about me</div>
      </Hover>
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("projects")}}
        >projects</div>
      </Hover>
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("contact")}}
        >contact</div>
      </Hover>
      
      <div className="dropdown-language">
        <Hover>
          <div 
            className={`language ${lang == 'ENG' && "opacity" }`} 
            onClick={()=>{setLang("PT-BR")}}
          >PT-BR</div>
        </Hover>
        <Hover>
          <div 
            className={`language ${lang == 'PT-BR' && "opacity" }`}
            onClick={()=>{setLang("ENG")}}
          >ENG</div>
        </Hover>
      </div>
    </div>
  );
}