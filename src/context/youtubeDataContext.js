import { createContext, useCallback, useState } from "react";

export const YoutubeDataContext = createContext();

export const YoutubeDataContextProvider = ({ children }) => {
  const [input, setInput] = useState("MR Beast");
  const [youtubeData, setYoutubeData] = useState([]);
  const [vidId, setVidId] = useState("");
  const [vidTitle, setVidTitle] = useState("");
  const [vidChannel, setVidChannel] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);

  const handleData = (data) => {
    setYoutubeData(data);
  };
  const handleRelatedVideos = (data) => {
    setRelatedVideos(data);
  };

  const selectVideo = (current) => {
    setVidId(current);
  };
  const currentVidTitle = (current) => {
    setVidTitle(current);
  };
  const videoChannel = (current) => {
    setVidChannel(current);
  };

  const stableHandleData = useCallback(handleData, []);

  const stableInput = useCallback(input, [input]);
  const stableVidId = useCallback(vidId, [vidId]);

  const values = {
    setInput,
    youtubeData,
    stableHandleData,
    stableInput,
    stableVidId,
    selectVideo,
    vidTitle,
    vidChannel,
    videoChannel,
    currentVidTitle,
    relatedVideos,
    handleRelatedVideos,
  };

  return (
    <YoutubeDataContext.Provider value={values}>
      {children}
    </YoutubeDataContext.Provider>
  );
};
