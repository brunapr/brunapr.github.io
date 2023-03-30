import { useContext, useState } from "react";
import { LanguageContext } from "../../../contexts/languageContext";
import Translate from "../../../utils/translate";
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

  const { language, setLanguage } = useContext(LanguageContext);

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

  function handleLanguage(lang: string) {
    setLanguage(lang);
  }

  return(
    <div className="dropdown">
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("home")}}
        >{Translate("home")}</div>
      </Hover>
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("about")}}
        >{Translate("about me")}</div>
      </Hover>
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("projects")}}
        >{Translate("projects")}</div>
      </Hover>
      <Hover>
        <div 
          className="dropdown-button"
          onClick={() => {goTo("contact")}}
        >{Translate("contact")}</div>
      </Hover>
      
      <div className="dropdown-language">
        <Hover>
          <div 
            className={`language ${language == 'en-US' && "opacity" }`} 
            onClick={()=>{setLanguage("pt-BR")}}
          >PT-BR</div>
        </Hover>
        <Hover>
          <div 
            className={`language ${language == 'pt-BR' && "opacity" }`}
            onClick={()=>{setLanguage("en-US")}}
          >ENG</div>
        </Hover>
      </div>
    </div>
  );
}