import { createContext, useState } from "react";

export const YoutubeDataContext = createContext();

export const YoutubeDataContextProvider = ({ children }) => {
  const [input, setInput] = useState("MR Beast");
  const [youtubeData, setYoutubeData] = useState([]);

  const handleData = (data) => {
    setYoutubeData(data);
  };
  const values = { input, setInput, youtubeData, handleData };

  return (
    <YoutubeDataContext.Provider value={values}>
      {children}
    </YoutubeDataContext.Provider>
  );
};
