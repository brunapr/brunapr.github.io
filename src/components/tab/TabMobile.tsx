import { ChevronDown } from "lucide-react";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Tab } from "../../stores/tabsStore";
import useSound from "../../hooks/useSound";
import { TranslationKey, useLocaleStore } from "../../stores/localeStore";

interface Props {
  title: string;
  children: ReactNode;
  ref: RefObject<HTMLDivElement | null>
  tab?: Tab;
  toggle?: () => void;
}

export default function TabContainerMobile({
  title,
  tab,
  ref,
  toggle,
  children,
}: Props) {
  const handleRef = useRef<HTMLDivElement>(null);
  const { t } = useLocaleStore()
  const closeTabSound = useSound('/assets/sounds/pop.mp3');
  const [ height, setHeight ] = useState(0);

  const id = "tab_" + title;

  function handleCloseTab(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    closeTabSound()
    ref.current?.classList.add("unmount-surge")
    setTimeout(() => {
      ref.current?.classList.remove("unmount-surge")
      toggle?.();
    }, 100)
  }

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    setHeight(viewportHeight > 0 ? viewportHeight : 600)
  }, [tab?.open]);

  if (!tab?.open) return null;

  return (
    <div
      id={id}
      ref={ref}
      style={{maxHeight: height - 64}}
      className={`mount-surge w-screen absolute left-0 bottom-0 h-fit z-[2] bg-slate-700 flex flex-col rounded-lg border-3 border-slate-800 dark:border-slate-800 select-none`}
    >
      <div
        ref={handleRef}
        className={`cursor-grab active:cursor-grabbing font-abz bg-violet-400 dark:bg-indigo-400 flex border-b-3 border-slate-800 text-slate-800 dark:text-slate-800 px-4 md:px-8 py-3 rounded-t-md tracking-wider w-full items-center justify-between`}
      >
        <span>{t(title as TranslationKey)}</span>
        <button
          onClick={(e) => handleCloseTab(e)}
          className="cursor-pointer hover:bg-slate-100/10 rounded-full p-1 mr-[-8px]"
        >
          <ChevronDown size={18} strokeWidth={4} />
        </button>
      </div>
      <div
        style={{maxHeight: height > 0 ? (height - 115) : 200}}
        className={`w-full h-full [&>*]:px-4 [&>*]:py-8 select-text bg-violet-100 dark:bg-slate-700 text-slate-800 dark:text-slate-400 rounded-b-md flex flex-col items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
}