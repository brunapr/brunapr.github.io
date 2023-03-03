import { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import './styles.css';
import Hover from '../Cursor';
import Dropdown from './dropdown/dropdown';

export default function Header() {
  const [ click, setClick ] = useState(false);

  useEffect(()=>{
    const left = document.getElementById("left-line");
    const right = document.getElementById("right-line");
    const dropdown = document.getElementById("dropdown");
    
    if(left!.classList.length > 1) {
      dropdown?.classList.remove("expand");
      left?.classList.remove("left-line");
      right?.classList.remove("right-line");
    } else {
      left?.classList.add("left-line");
      right?.classList.add("right-line");
      dropdown?.classList.add("expand");
    }
  }, [click]);

  return(
    <div className="header">
      <div className="icons">
        <Hover>
          <a href='https://github.com/brunapr' target="_blank"><FiGithub/></a>
        </Hover>
        <Hover>
          <a href='https://www.linkedin.com/in/prbruna/' target="_blank"><SiLinkedin/></a>
        </Hover>
      </div>
      <Hover>
        <div className="menu" onClick={() => { setClick(!click) }}>
          <div id="left-line" className="line"/>
          <div id="right-line" className="line"/>
        </div>
      </Hover>

      <div id="dropdown" className="dropdown-wrapper">
        <Dropdown/>
      </div>
    </div>
  );
}