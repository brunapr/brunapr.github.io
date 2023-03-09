import React from 'react';
import { useEffect, useState } from 'react';
import useForceRerender from '../../hooks/useForceRerender';
import { useLockScroll } from '../../hooks/useLockScroll';
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
  // const { lockScroll, unlockScroll } = useLockScroll();
  const [ scrollDimension, setScrollDimension ] = useState(0);
  
  const forceRerender = useForceRerender();
  const { width } = useWindowDimensions();
  
  const slide = document.getElementById("slide");

  useEffect(() => {
    if(document.getElementById("slide")) {
      setFlag(true);
      width > 1200 ? 
      setScrollDimension(document.getElementById("slide")!.scrollHeight) :
      setScrollDimension(document.getElementById("slide")!.scrollWidth);
    } else {
      forceRerender();
    }
  }, [flag, width])

  if(flag) {
    const scroll = scrollDimension/4;
      slide!.addEventListener("scroll", () => {
        var scrolled = width > 1200 ? slide!.scrollTop : slide!.scrollLeft;
        if(scrolled >= 0 && scrolled <= 100) {
          props.setSlide(1);
        } else if(scrolled > 100 && scrolled <= scroll) {
          props.setSlide(2);
        } else if(scrolled > scroll && scrolled <= scroll*2) {
          props.setSlide(3);
        } else if(scrolled > scroll*2 && scrolled <= scroll*3) {
          props.setSlide(4);
        }
      })
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