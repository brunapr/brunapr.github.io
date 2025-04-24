import { Clouds } from "./Clouds";
import { Stars } from "./Stars";
import Cat from "./Cat";
import Moon from "./Moon";

export default function Hero() {
  return (
    <div className="z-[0] fixed bg-gradient-to-b from-violet-400 to-purple-200 dark:from-slate-800 dark:to-indigo-800 w-screen h-[calc(100vh-36px)] md:h-[calc(100vh-7rem)] transition-[height] overflow-hidden">
      <Moon />
      <Stars/>
      <Clouds />
      <Cat />
    </div>
  );
}