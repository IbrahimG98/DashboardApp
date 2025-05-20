import React, { useState, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

export const languages = {
  en: "en",
  fr: "fr",
};

const initialState = {
  language: languages.en,
  setLanguage: () => {},
};

const LanguageContext = createContext(initialState);

export const LanguageProvider = ({ children }) => {
  const lng = "";
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(lng || languages.en);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    // localStorage.setItem("lng", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default useLanguage;
