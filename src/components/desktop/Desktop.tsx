import { SquareCode, SquareLibrary, SquareTerminal, SquareUserRound } from "lucide-react";
import { ReactNode, RefObject, useRef } from "react";
import { TabList, useTabsStore } from "../../stores/tabsStore";
import { THEME, useThemeStore } from "../../stores/themeStore";
import useSound from "../../hooks/useSound";
import DesktopTab from "./components/DesktopTab";

interface Button {
  title: TabList;
  ref: RefObject<HTMLButtonElement | null>;
  Icon: ReactNode;
}

function DesktopButton({ title, ref, Icon }: Button) {
  const openTabSound = useSound('/assets/sounds/modern.wav');
  const { toggleTab } = useTabsStore()

  function handleToggle() {
    const store = useTabsStore.getState();
    const tab = store[title];
    if (tab.open) return

    toggleTab(title);
    const element = ref.current

    if (element) {
      openTabSound()
      const children = Array.from(element.children) as HTMLElement[];
      children.forEach((child) => {
        child.classList.add("click-bounce");

        setTimeout(() => {
          child.classList.remove("click-bounce");
        }, 500);
      });
    }
  }

  return (
    <button
      ref={ref}
      onClick={handleToggle}
      className="w-fit justify-self-center cursor-pointer rounded-lg md:hover:bg-violet-200 md:hover:dark:bg-slate-400/10 p-3 flex flex-col space-y-1.5 items-center justify-center">
      {Icon}
      <span className="dark:text-slate-500">{title === "about" ? "about" : title}</span>
    </button>
  );
}

export default function Desktop() {
  const { theme } = useThemeStore()
  const iconProps = { className: "dark:text-slate-500", size: 32 }

  const aboutRef = useRef<HTMLButtonElement>(null)
  const skillsRef = useRef<HTMLButtonElement>(null)
  const experienceRef = useRef<HTMLButtonElement>(null)
  const projectsRef = useRef<HTMLButtonElement>(null)

  const buttons = [
    { title: "about", Icon: <SquareUserRound {...iconProps} /> },
    { title: "experience", Icon: <SquareCode {...iconProps} /> },
    { title: "skills", Icon: <SquareLibrary {...iconProps} /> },
    { title: "projects", Icon: <SquareTerminal {...iconProps} /> },
  ]

  const refMap = {
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef
  }

  return (
    <DesktopTab title="home">
      <div className="flex flex-col items-center">
        <div className="flex max-md:flex-col max-md:items-center justify-center w-full text-5xl dark:text-slate-500 w-full transition-all">
          <div className="w-fit">
            <span >hi,</span>
            <span className="max-md:mr-0 mx-5">i'm</span>
          </div>
          <div className="w-fit max-md:mr-[-0.5rem] flex items-center">
            <span className="text-violet-400 dark:text-indigo-400 font-abz mr-1">Bruna</span>
            <span className="text-4xl mt-[-1px]">{theme === THEME.LIGHT ? "✨" : "🌙"}</span>
          </div>
        </div>
        <span className="w-full text-center font-abz italic text-slate-500 md:text-slate-400 dark:text-slate-500 md:dark:text-slate-500 mt-2">front-end developer & ui/ux explorer</span>
        <div className="w-fit grid grid-cols-2 md:flex md:space-x-4 mt-10 ">
          {
            buttons.map(({ title, Icon }) => {
              return (
                <DesktopButton
                  key={"desktop_" + title}
                  ref={refMap[title as TabList]}
                  title={title as TabList}
                  Icon={Icon}
                />
              );
            })
          }
        </div>
      </div>
    </DesktopTab>
  );
}