import { RefObject, useEffect, useRef, useState } from "react";
import { Tab } from "../stores/tabsStore";
import { useMediaQuery } from "../hooks/useMediaQuery";

export function useDrag(
  containerRef: RefObject<HTMLDivElement | null>,
  handleRef: RefObject<HTMLDivElement | null>,
  tab: Tab | undefined,
  setTab: ((tab: Tab) => void) | undefined
) {
  const startPos = useRef({ x: 0, y: 0 });
  const inputStartPos = useRef({ x: 0, y: 0 });
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px) and (hover: none)');
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const parent = containerRef.current;
    const handle = handleRef.current;

    if (!parent || !handle) return;

    const startDrag = (clientX: number, clientY: number) => {
      setIsDragging(true);
      const rect = parent.getBoundingClientRect();
      startPos.current = { x: rect.left, y: rect.top };
      inputStartPos.current = { x: clientX, y: clientY };
      parent.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onDrag = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      const dx = clientX - inputStartPos.current.x;
      const dy = clientY - inputStartPos.current.y;
      parent.style.left = `${startPos.current.x + dx}px`;
      parent.style.top = `${startPos.current.y + dy}px`;
    };

    const endDrag = () => {
      setIsDragging(false);
      parent.style.cursor = "";
      document.body.style.userSelect = "";

      if (setTab && tab && parent) {
        const rect = parent.getBoundingClientRect();
        setTab({ ...tab, x: rect.left, y: rect.top });
      }
    };

    // Mouse events
    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      startDrag(e.clientX, e.clientY);
    };

    const onMouseMove = (e: MouseEvent) => onDrag(e.clientX, e.clientY);

    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      // Verifica se o toque foi no botão de fechar
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"]')) {
        return; // Ignora toques em elementos interativos
      }
      
      if (!isTablet) return;
      e.preventDefault();
      e.stopPropagation();
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isTablet) return;
      onDrag(e.touches[0].clientX, e.touches[0].clientY);
    };

    // Add event listeners
    handle.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", endDrag);
    handle.addEventListener("touchstart", onTouchStart, { passive: false });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", endDrag);

    return () => {
      handle.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", endDrag);
      handle.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", endDrag);
    };
  }, [isDragging, tab, setTab, isTablet, containerRef, handleRef]);

  return { isDragging };
}