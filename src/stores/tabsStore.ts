import { create } from "zustand";

export interface Tab {
  open: boolean
  x: number
  y: number
  z: number
}

interface TabsStore {
  about: Tab;
  skills: Tab;
  experience: Tab;
  projects: Tab;
  getHighestZIndex: () => number;
  getTab: (tabName: TabList) => Tab;
  setTab: (tabName: TabList, tab: Tab) => void;
  toggleTab: (tabName: TabList) => void;
  closeAllTabs: () => void;
}

export type TabList = keyof Omit<TabsStore, 'setTab' | 'toggleTab' | 'getHighestZIndex' | 'getTab' | 'closeAllTabs'>

const initialValue: Tab = { open: false, x: 0, y: 0, z: 1 }

function getRandomPosition() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const xMin = width * 0.1;
  const xMax = width * 0.5;

  const yMin = 0;
  const yMax = height * 0.5;

  return {
    x: Math.floor(Math.random() * (xMax - xMin) + xMin),
    y: Math.floor(Math.random() * (yMax - yMin) + yMin),
  };
}

export const useTabsStore = create<TabsStore>()((set, get) => ({
  about: initialValue,
  skills: initialValue,
  experience: initialValue,
  projects: initialValue,

  setTab: (tabName, tab) => set({ [tabName]: tab }),

  getTab: (tabName) => get()[tabName],

  getHighestZIndex: () => {
    const state = get();
    return Math.max(
      state.about.z,
      state.skills.z,
      state.experience.z,
      state.projects.z
    );
  },

  toggleTab: (tabName) =>
    set((state) => {
      const currentHighestZ = Math.max(
        state.about.z,
        state.skills.z,
        state.experience.z,
        state.projects.z
      );

      const newZ = currentHighestZ + 1;
      const currentTab = state[tabName];

      return {
        [tabName]: {
          ...currentTab,
          open: !currentTab.open,
          ...(currentTab.open ? {} : getRandomPosition()),
          z: !currentTab.open ? newZ : currentTab.z
        }
      };
    }),

  closeAllTabs: () => set({
    about: initialValue,
    skills: initialValue,
    projects: initialValue,
    experience: initialValue,
  }),
}));
