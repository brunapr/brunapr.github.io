import { createContext, useEffect, useState } from "react";

interface ILanguageContext {
  language: String | null,
  setLanguage: React.Dispatch<React.SetStateAction<String | null>>
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

const LanguageProvider = ({ children }: any) => {
  const [ language, setLanguage ] = useState<String | null>(null);

  useEffect(() => {
    getLanguage();
  }, []);

  const getLanguage = async () => {
    const token = await localStorage.getItem('language');
    if (token) {
      setLanguage(token);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
