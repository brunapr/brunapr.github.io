import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useAudioStore } from "../../stores/audioStore";
import { THEME, useThemeStore } from "../../stores/themeStore";
import Container from "../container/Container";
import { RefObject, useRef } from "react";
import useSound from "../../hooks/useSound";

export default function Controls() {
  const toggleControlSound = useSound('/assets/sounds/cool.wav');

  const { theme, toggleTheme } = useThemeStore()
  const { audio, toggleAudio } = useAudioStore()

  const themeRef = useRef<HTMLButtonElement>(null)
  const audioRef = useRef<HTMLButtonElement>(null)

  function handleToggle(ref: RefObject<HTMLButtonElement | null>, action: () => void) {
    action();
    toggleControlSound()
    const element = ref.current;

    if (element && element.children.length > 0) {
      const children = Array.from(element.children) as HTMLElement[];

      children.forEach((child) => {
        child.classList.add("click-bounce");
        console.log(child.classList)
        setTimeout(() => {
          child.classList.remove("click-bounce");
        }, 500);
      });
    }
  }

  return (
    <Container className="absolute z-[1] flex space-x-1 md:space-x-2 !py-2 px-4">
      <button
        type="button"
        ref={themeRef}
        onClick={() => handleToggle(themeRef, toggleTheme)}
        className={`p-2.5 cursor-pointer hover:bg-slate-300/30 dark:hover:bg-slate-100/10 rounded-full transition`}
      >
        <div>
          {
            theme === THEME.LIGHT ?
              <Sun className="text-slate-800" strokeWidth={2} size={32} /> :
              <Moon className="text-slate-100" strokeWidth={2} size={32} />
          }
        </div>
      </button>
      <button
        type="button"
        ref={audioRef}
        onClick={() => handleToggle(audioRef, toggleAudio)}
        className={`p-2.5 cursor-pointer hover:bg-slate-300/30 dark:hover:bg-slate-100/10 rounded-full transition`}>
        <div>
          {
            audio ?
              <Volume2 className="text-slate-800 dark:text-slate-100" strokeWidth={2} size={32} /> :
              <VolumeX className="text-slate-800 dark:text-slate-100" strokeWidth={2} size={32} />
          }
        </div>
      </button>
    </Container>
  );
}