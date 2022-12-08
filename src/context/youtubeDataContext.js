import { createContext, useCallback, useState } from "react";

export const YoutubeDataContext = createContext();

export const YoutubeDataContextProvider = ({ children }) => {
  const [input, setInput] = useState("MR Beast");
  const [youtubeData, setYoutubeData] = useState([]);

  const handleData = (data) => {
    setYoutubeData(data);
  };

  const stableHandleData = useCallback(handleData, []);
  const stableInput = useCallback(input, [input]);

  const values = { setInput, youtubeData, stableHandleData, stableInput };

  return (
    <YoutubeDataContext.Provider value={values}>
      {children}
    </YoutubeDataContext.Provider>
  );
};
