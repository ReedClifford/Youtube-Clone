import { createContext, useState } from "react";

export const ToggleContexts = createContext();

export const ToggleContextsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeHamburger, setActiveHamburger] = useState(false);

  const toggleBurgerMenu = () => {
    setActiveHamburger(!activeHamburger);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const values = {
    darkMode,
    setDarkMode,
    toggleDarkMode,
    toggleBurgerMenu,
    activeHamburger,
  };

  return (
    <ToggleContexts.Provider value={values}>{children}</ToggleContexts.Provider>
  );
};
