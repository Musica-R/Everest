import { createContext, useContext, useEffect, useState } from 'react';
import { ui } from '../data/content';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'en'; } catch { return 'en'; }
  });

  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  // t = UI strings for current language, pick = choose from {en, ml} object
  const value = { lang, setLang, t: ui[lang], pick: (o) => o[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
