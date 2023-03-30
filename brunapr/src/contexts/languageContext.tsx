import { createContext, useEffect, useState } from "react";

interface ILanguageContext {
  language: String | null,
  setLanguage: React.Dispatch<React.SetStateAction<String | null>>
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

const LanguageProvider = ({ children }: any) => {
  const [ language, setLanguage ] = useState<String | null>(null);

  useEffect(() => {
    var lng = navigator.language || window.navigator.language;
    setLanguage(lng);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
