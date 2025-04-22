import { useState, useEffect } from "react";
import './styles.css';

export default function Navbar() {
  const [click, setClick] = useState(false);

  useEffect(() => {
    const left = document.getElementById("left-line");
    const right = document.getElementById("right-line");
    // const dropdown = document.getElementById("dropdown");

    if (left && right) {
      if (click) {
        left.classList.add("left-line");
        right.classList.add("right-line");
        // dropdown.classList.add("expand");
      } else {
        // dropdown.classList.remove("expand");
        left.classList.remove("left-line");
        right.classList.remove("right-line");
      }
    }
  }, [click]);

  return (
    <div className="z-10 fixed w-full h-20 flex items-center justify-center mix-blend-difference">
      <div className="max-w-5xl w-full h-full p-16 lg:p-2 flex justify-between items-center ">
        <div className="h-20 text-white bs-rg flex justify-center items-center">
          <h1 className="text-4xl mb-2 ml-2 md:ml-0">bp</h1>
        </div>
        <button
          onClick={() => { setClick(!click) }}
          className="menu"
        >
          <div id="left-line" className="line bg-white" />
          <div id="right-line" className="line bg-white" />
        </button>
      </div>
    </div>
  );
}