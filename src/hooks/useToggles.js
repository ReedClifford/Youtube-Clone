import { useContext } from "react";
import { ToggleContexts } from "../context/toggleContexts";

const useToggle = () => {
  return useContext(ToggleContexts);
};
export default useToggle;
