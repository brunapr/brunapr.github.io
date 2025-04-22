import { X } from "lucide-react";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Tab } from "../../stores/tabsStore";
import useSound from "../../hooks/useSound";

interface Props {
  title: string;
  children: ReactNode;
  ref: RefObject<HTMLDivElement | null>
  tab?: Tab;
  setTab?: (tab: Tab) => void;
  toggle?: () => void;
}

export default function TabContainer({
  title,
  tab,
  setTab,
  ref,
  toggle,
  children,
}: Props) {
  const handleRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });
  const mouseStartPos = useRef({ x: 0, y: 0 });
  const closeTabSound = useSound('/assets/sounds/close.wav');
  const [width, setWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false);

  const id = "tab_" + title;

  function handleCloseTab(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    closeTabSound()
    ref.current?.classList.add("unmount-bounce")
    setTimeout(() => {
      ref.current?.classList.remove("unmount-bounce")
      toggle?.();
    }, 100)
  }

  useEffect(() => {
    const parent = ref?.current;
    const handle = handleRef.current;

    if (!parent || !handle) return;

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation()
      e.stopPropagation();
      setIsDragging(true);

      // Captura a posição atual da div
      const rect = parent.getBoundingClientRect();
      startPos.current = {
        x: rect.left,
        y: rect.top
      };

      // Captura a posição inicial do mouse
      mouseStartPos.current = {
        x: e.clientX,
        y: e.clientY
      };

      parent.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      // Calcula o deslocamento do mouse
      const dx = e.clientX - mouseStartPos.current.x;
      const dy = e.clientY - mouseStartPos.current.y;

      // Aplica o deslocamento à posição original
      parent.style.left = `${startPos.current.x + dx}px`;
      parent.style.top = `${startPos.current.y + dy}px`;
    };

    const onMouseUp = () => {
      setIsDragging(false);
      if (parent) {
        parent.style.cursor = "";
      }
      document.body.style.userSelect = "";

      // Atualiza a store se necessário
      if (setTab && tab && parent) {
        const rect = parent.getBoundingClientRect();
        setTab({
          ...tab,
          x: rect.left,
          y: rect.top
        });
      }
    };

    handle.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      handle.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, tab, setTab]);

  useEffect(() => {
    const element = document.getElementById(id)
    if (element) setWidth(element.offsetWidth)
  }, [tab?.open])

  if (!tab?.open) return null;

  return (
    <div
      id={id}
      ref={ref}
      style={{
        top: tab ? tab.y ?? 100 : undefined,
        left: tab ? tab.x ?? 100 : undefined,
        zIndex: tab?.z,
        position: "absolute",
        cursor: isDragging ? "grabbing" : "default",
      }}
      className={`mount-bounce z-[2] bg-slate-700 flex flex-col rounded-lg md:border-3 border-slate-800 dark:border-slate-800 select-none`}
    >
      <div
        ref={handleRef}
        className={`cursor-grab active:cursor-grabbing font-abz bg-violet-400 dark:bg-indigo-400 flex border-b-3 border-slate-800 text-slate-800 dark:text-slate-800 px-8 py-3 rounded-t-md tracking-wider w-full items-center justify-between`}
      >
        <span>{title}</span>
        <button
          onClick={(e) => handleCloseTab(e)}
          className="cursor-pointer hover:bg-slate-100/10 rounded-full p-1 mr-[-8px]"
        >
          <X size={18} strokeWidth={4} />
        </button>
      </div>
      <div
        style={{ ...(width > 0 && { width }) }}
        className={`max-w-[600px] w-full [&>*]:p-8 select-text md:bg-violet-100 max-h-[600px] dark:md:bg-slate-700 text-slate-800 dark:text-slate-400 rounded-b-md flex flex-col items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
}