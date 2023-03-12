import React from 'react';
import { useEffect, useState } from 'react';
import useForceRerender from '../../hooks/useForceRerender';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './styles.css';

export default function SlideDots(
    props: {
      slide: number,
      setSlide: React.Dispatch<React.SetStateAction<number>>,
    }
  ) 
{

  const [ flag, setFlag ] = useState(false);
  const [ scrollDimension, setScrollDimension ] = useState(0);
  const [ scroll, setScroll ] = useState(0);
  
  const forceRerender = useForceRerender();
  const { width, height } = useWindowDimensions();

  const slide = document.getElementById("slide");

  useEffect(() => {
    !slide ? forceRerender() : setFlag(true); 
  }, [slide])

  var timer:any = null;
  if(slide != null && flag) {
    slide.addEventListener('scroll', function() {
        width > 1200 ? 
        setScrollDimension(((75/100)*height)*4) :
        setScrollDimension(width*4);
        setScroll(scrollDimension/4);

        if(timer !== null) {
          clearTimeout(timer);        
        }
        timer = setTimeout(function() {
          var scrolled = width > 1200 ? slide.scrollTop : slide.scrollLeft;
          if(scrolled >= 0 && scrolled <= scroll/2 - 10) {
            props.setSlide(1);
          } else if(scrolled > scroll/2 && scrolled <= scroll + scroll/2 - 10) {
            props.setSlide(2);
          } else if(scrolled > scroll + scroll/2 && scrolled <= scroll*2 + scroll/2 - 10) {
            props.setSlide(3);
          } else if(scrolled > scroll*2 + scroll/2 && scrolled <= scrollDimension) {
            props.setSlide(4);
          }
        }, 150);
    }, false);
  }

  return(
    <div className="dots-wrapper">
      <div 
        className={`slider-dot ${props.slide == 1 && "dot-grow"}`}
      />
      <div 
        className={`slider-dot ${props.slide == 2 && "dot-grow"}`}
      />
      <div 
        className={`slider-dot ${props.slide == 3 && "dot-grow"}`}
      />
      <div 
        className={`slider-dot ${props.slide == 4 && "dot-grow"}`}
      />
    </div>
  );
}