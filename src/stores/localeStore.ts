import { create } from "zustand";
import { pt } from "../intl/pt"
import { en } from "../intl/en"

export enum LOCALE {
  EN = "en",
  PT = "pt",
}

export type TranslationKey = keyof typeof pt;

interface LocaleStore {
  locale: LOCALE;
  setLocale: (locale: LOCALE) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}
function isLocale(value: string | null): value is LOCALE {
  return value === LOCALE.EN || value === LOCALE.PT;
}

function getStorageLocale(): LOCALE {
  const storageTheme = localStorage.getItem("locale");
  if (!storageTheme) localStorage.setItem("locale", LOCALE.EN)
  return isLocale(storageTheme) ? storageTheme : LOCALE.EN;
}


export const useLocaleStore = create<LocaleStore>()((set, get) => ({
  locale: getStorageLocale(),
  setLocale: (locale) => {
    localStorage.setItem("locale", locale);
    set({ locale });
  },
  toggleLocale: () =>
    set((state) => {
      const newLocale =
        state.locale === LOCALE.EN ? LOCALE.PT : LOCALE.EN;
      localStorage.setItem("locale", newLocale);
      return { locale: newLocale };
    }),
  t: (key) => {
    const currentLocale = get().locale;
    return currentLocale === 'pt'
      ? pt[key]
      : en[key];
  }
}))
