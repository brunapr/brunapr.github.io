import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useAudioStore } from "../../stores/audioStore";
import { THEME, useThemeStore } from "../../stores/themeStore";
import Container from "../container/Container";
import { RefObject, useRef } from "react";
import useSound from "../../hooks/useSound";
import { LOCALE, useLocaleStore } from "../../stores/localeStore";

export default function Controls() {
  const toggleControlSound = useSound('/assets/sounds/cool.wav');

  const { theme, toggleTheme } = useThemeStore()
  const { audio, toggleAudio } = useAudioStore()
  const { locale, toggleLocale } = useLocaleStore()

  const themeRef = useRef<HTMLButtonElement>(null)
  const audioRef = useRef<HTMLButtonElement>(null)
  const localeRef = useRef<HTMLButtonElement>(null)

  const commonStyle = "w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-slate-300/30 dark:hover:bg-slate-100/10 rounded-full transition"
  const iconStyle = "text-slate-800 dark:text-slate-100"

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
        className={commonStyle}
      >
        <div>
          {
            theme === THEME.LIGHT ?
              <Sun className={iconStyle} strokeWidth={2.2} size={24} /> :
              <Moon className={iconStyle} strokeWidth={2.2} size={24} />
          }
        </div>
      </button>
      <button
        type="button"
        ref={audioRef}
        onClick={() => handleToggle(audioRef, toggleAudio)}
        className={commonStyle}>
        <div>
          {
            audio ?
              <Volume2 className={iconStyle} strokeWidth={2} size={24} /> :
              <VolumeX className={iconStyle} strokeWidth={2} size={24} />
          }
        </div>
      </button>
      <button
        type="button"
        ref={localeRef}
        onClick={() => handleToggle(localeRef, toggleLocale)}
        className={commonStyle}
      >
        <div>
          {
            locale === LOCALE.EN ?
              <span className={`${iconStyle} font-mono text-xl px-0.5`}>EN</span> :
              <span className={`${iconStyle} font-mono text-xl px-0.5`}>PT</span>
          }
        </div>
      </button>
    </Container>
  );
}