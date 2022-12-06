import { createContext, useState } from "react";

export const DarkModeContext = createContext();
export const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  const values = { darkMode, setDarkMode, toggle };

  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  );
};
