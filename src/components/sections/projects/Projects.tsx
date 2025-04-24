import { useRef } from "react";
import { useTabsStore } from "../../../stores/tabsStore";
import TabContainer from "../../tab/Tab";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import ProjectsContent from "./components/ProjectsContent";
import TabContainerMobile from "../../tab/TabMobile";

export default function Projects() {
  const { projects, toggleTab } = useTabsStore()
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(width < 48rem)');

  const props = {
    title: "projects",
    ref: ref,
    tab: projects,
    toggle: () => toggleTab("projects"),
    children: <ProjectsContent />
  };

  return isMobile ? (
    <TabContainerMobile {...props} />
  ) : (
    <TabContainer maxWidth="max-w-[400px]" {...props} />
  );
}