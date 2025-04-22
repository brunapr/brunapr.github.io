import { useRef } from "react";
import { useTabsStore } from "../../../stores/tabsStore";
import TabContainerMobile from "../../tab/TabMobile";
import AboutContent from "./components/AboutContent";
import TabContainer from "../../tab/Tab";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { about, toggleTab } = useTabsStore()
  const isMobile = useMediaQuery('(width <= 48rem)');

  const props = {
    title: "about",
    ref: ref,
    tab: about,
    toggle: () => toggleTab("about"),
    children: <AboutContent />
  };

  return isMobile ? (
    <TabContainerMobile {...props} />
  ) : (
    <TabContainer maxWidth="max-w-[600px]" {...props} />
  );
}