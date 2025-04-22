import { create } from "zustand";

export enum THEME {
  DARK = "dark",
  LIGHT = "light",
}

function isTheme(value: string | null): value is THEME {
  return value === THEME.DARK || value === THEME.LIGHT;
}

function getStorageTheme(): THEME {
  const storageTheme = localStorage.getItem("theme");
  if (!storageTheme) localStorage.setItem("theme", THEME.DARK)
  return isTheme(storageTheme) ? storageTheme : THEME.DARK;
}

interface ThemeStore {
  theme: THEME;
  setTheme: (theme: THEME) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()((set) => ({
  theme: getStorageTheme(),
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme =
        state.theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}))
