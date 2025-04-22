import { useRef } from "react";
import { useTabsStore } from "../../../stores/tabsStore";
import TabContainer from "../../tab/Tab";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import TechnologiesContent from "./components/TechnologiesContent";
import TabContainerMobile from "../../tab/TabMobile";

export default function Technologies() {
  const { skills, toggleTab } = useTabsStore()
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(width <= 48rem)');

  const props = {
    title: "skills",
    ref: ref,
    tab: skills,
    toggle: () => toggleTab("skills"),
    children: <TechnologiesContent />
  };

  return isMobile ? (
    <TabContainerMobile {...props} />
  ) : (
    <TabContainer {...props} />
  );
}