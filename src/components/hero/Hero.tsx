import { useEffect } from "react";
import { Clouds } from "./Clouds";
import { Stars } from "./Stars";
import Cat from "./Cat";
import Moon from "./Moon";

export default function Hero() {
  useEffect(() => {
    function parallax(e: any) {
      document.querySelectorAll(".moving-object").forEach((move: any) => {
        let moving_value = move.getAttribute("data-value");

        if (moving_value) {
          let x = (e.clientX * parseInt(moving_value)) / 250
          let y = (e.clientY * parseInt(moving_value)) / 250
          move.style.transform = "translate(" + x + "px) translateY(" + y + "px)"
        }
      })
    }

    document.addEventListener('mousemove', parallax);
    return () => document.removeEventListener('resize', parallax);
  }, []);

  return (
    <div className="z-[0] fixed bg-gradient-to-b from-violet-400 to-purple-200 dark:from-slate-800 dark:to-indigo-800 w-screen h-[calc(100vh-36px)] md:h-[calc(100vh-7rem)] transition-[height] overflow-hidden">
      <Moon />
      <Stars />
      <Clouds />
      <Cat />
    </div>
  );
}