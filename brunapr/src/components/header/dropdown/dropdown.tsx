import { useState } from "react";
import Hover from "../../Cursor";
import './styles.css';

export default function Dropdown() {

  const [ lang, setLang ] = useState("PT-BR");

  return(
    <div className="dropdown">
      <Hover>
        <div className="dropdown-button">Home</div>
      </Hover>
      <Hover>
        <div className="dropdown-button">About Me</div>
      </Hover>
      <Hover>
        <div className="dropdown-button">Projects</div>
      </Hover>
      <Hover>
        <div className="dropdown-button">Contact</div>
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