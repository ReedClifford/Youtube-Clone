import { useContext } from "react";
import { DarkModeContext } from "../context/toggleDarkMode";

const useDarkMode = () => {
  return useContext(DarkModeContext);
};
export default useDarkMode;
