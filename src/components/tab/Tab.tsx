import { X } from "lucide-react";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Tab } from "../../stores/tabsStore";
import useSound from "../../hooks/useSound";
import { TranslationKey, useLocaleStore } from "../../stores/localeStore";
import { useDrag } from "../../hooks/useDrag";

interface Props {
  title: string;
  children: ReactNode;
  ref: RefObject<HTMLDivElement | null>
  maxWidth: string
  tab?: Tab;
  setTab?: (tab: Tab) => void;
  toggle?: () => void;
}

export default function TabContainer({
  title,
  tab,
  setTab,
  ref,
  maxWidth,
  toggle,
  children,
}: Props) {
  const handleRef = useRef<HTMLDivElement>(null);
  const { t } = useLocaleStore();
  const closeTabSound = useSound('/assets/sounds/pop.mp3');
  const { isDragging } = useDrag(ref, handleRef, tab, setTab);
  const [width, setWidth] = useState(0);
  const id = "tab_" + title;

  function handleCloseTab(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    closeTabSound();
    ref.current?.classList.add("unmount-bounce");
    setTimeout(() => {
      ref.current?.classList.remove("unmount-bounce");
      toggle?.();
    }, 100);
  }

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) setWidth(element.offsetWidth);
  }, [tab?.open, id]);

  if (!tab?.open) return null;

  return (
    <div
      id={id}
      ref={ref}
      style={{
        top: tab?.y ?? 100,
        left: tab?.x ?? 100,
        zIndex: tab?.z,
        position: "absolute",
        cursor: isDragging ? "grabbing" : "default",
        touchAction: "none",
      }}
      className={`mount-bounce z-[2] bg-slate-700 flex flex-col rounded-lg md:border-3 border-slate-800 dark:border-slate-800 select-none`}
    >
      <div
        ref={handleRef}
        className={`cursor-grab active:cursor-grabbing font-abz bg-violet-400 dark:bg-indigo-400 flex border-b-3 border-slate-800 text-slate-800 dark:text-slate-800 px-8 py-3 rounded-t-md tracking-wider w-full items-center justify-between`}
      >
        <span>{t(title as TranslationKey)}</span>
        <button
          onClick={handleCloseTab}
          onTouchEnd={() => handleCloseTab}
          type="button"
          aria-label="Close"
          className="cursor-pointer hover:bg-slate-100/10 rounded-full p-1 mr-[-8px]"
        >
          <X size={18} strokeWidth={4} />
        </button>
      </div>
      <div
        style={{ ...(width > 0 && { width }) }}
        className={`${maxWidth} w-fit [&>*]:p-8 select-text md:bg-violet-100 max-h-[600px] dark:md:bg-slate-700 text-slate-800 dark:text-slate-400 rounded-b-md flex flex-col items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
}