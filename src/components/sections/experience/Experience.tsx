import { useRef } from "react";
import { useTabsStore } from "../../../stores/tabsStore";
import TabContainer from "../../tab/Tab";
import ExperienceContent from "./components/ExperienceContent";
import TabContainerMobile from "../../tab/TabMobile";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function Experience() {
  const { experience, toggleTab } = useTabsStore()
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(width <= 48rem)');

  const props = {
    title: "experience",
    ref: ref,
    tab: experience,
    toggle: () => toggleTab("experience"),
    children: <ExperienceContent />
  };

  return isMobile ? (
    <TabContainerMobile {...props} />
  ) : (
    <TabContainer {...props} />
  );
}