import { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import './styles.css';
import Hover from '../cursor';
import Dropdown from './dropdown/index';

export default function Header(
    props: {
      slide: number,
      setSlide: React.Dispatch<React.SetStateAction<number>>,
    }
  )  
{
  const [ click, setClick ] = useState(false);

  useEffect(()=>{
    const left = document.getElementById("left-line");
    const right = document.getElementById("right-line");
    const dropdown = document.getElementById("dropdown");

    if(left && right && dropdown) {
      if(dropdown.classList.length > 1) {
        dropdown.classList.remove("expand");
        left.classList.remove("left-line");
        right.classList.remove("right-line");
      } else {
        left.classList.add("left-line");
        right.classList.add("right-line");
        dropdown.classList.add("expand");
      }
    }
  }, [click]);

  return(
    <div className="header">
      <div className="icons">
        <Hover>
          <a href='https://github.com/brunapr' target="_blank"><FiGithub size={26}/></a>
        </Hover>
        <Hover>
          <a href='https://www.linkedin.com/in/prbruna/' target="_blank"><SiLinkedin size={26}/></a>
        </Hover>
      </div>
      <Hover>
        <div className="menu" onClick={() => { setClick(!click) }}>
          <div id="left-line" className="line"/>
          <div id="right-line" className="line"/>
        </div>
      </Hover>

      <div id="dropdown" className="dropdown-wrapper">
        <Dropdown 
          click={click} 
          setClick={setClick}
          slide={props.slide}
          setSlide={props.setSlide}
        />
      </div>
    </div>
  );
}