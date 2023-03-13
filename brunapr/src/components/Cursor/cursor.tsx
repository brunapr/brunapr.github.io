import React from "react";
import { useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../contexts/mouseContext"; 
import { isMobile } from 'react-device-detect';
import './styles.css';

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

    return (
      <>
        <div
          className={`ring ${cursorType} ${isMobile && "hide-cursor"}`}
          style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
        <div
          className={`dot ${cursorType} ${isMobile && "hide-cursor"}`}
          style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
      </>
    );
};
export default Cursor;