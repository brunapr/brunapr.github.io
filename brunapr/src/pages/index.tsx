import { useState } from "react";
import './styles.css';
import Home from "./home/index";

export default function Main(props: {slide: number}) {

  return(
    <div className="slide-wrapper">
      <Home/>
    </div>
  );
}