import { useContext } from "react";
import { YoutubeDataContext } from "../context/youtubeDataContext";

const useYoutubeData = () => {
  return useContext(YoutubeDataContext);
};
export default useYoutubeData;
