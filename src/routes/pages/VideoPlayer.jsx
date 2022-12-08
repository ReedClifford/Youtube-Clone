import { AiOutlineFundProjectionScreen, AiTwotoneLike } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import useYoutubeData from "../../hooks/useYoutubeData";

const VideoPlayer = () => {
  const { stableVidId, vidTitle, vidChannel } = useYoutubeData();

  return (
    <div className="min-h-screen py-20">
      <div className="container  grid grid-cols-1 lg:grid-cols-5 lg:ml-1 gap-5">
        <div className="border dark:border-none rounded-lg col-span-4 ">
          <iframe
            className="w-full h-80 lg:h-128 "
            src={`https://www.youtube.com/embed/${stableVidId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-3">
            <h2 className="text-2xl text-neutral-800 dark:text-neutral-200 font-semibold my-2">
              {vidTitle}
            </h2>
            <span className="flex text-neutral-700 dark:text-neutral-300 items-center gap-2">
              {vidChannel}
              <GoVerified />
            </span>

            <div className="flex  items-center gap-2 my-2">
              <span className="flex items-center gap-2 text-neutral-100 dark:text-neutral-300 bg-neutral-500 dark:bg-neutral-900 py-2 px-4 rounded-2xl">
                <AiTwotoneLike />
              </span>
              <span className="flex items-center gap-2 text-neutral-100 dark:text-neutral-300 bg-neutral-500 dark:bg-neutral-900 py-2 px-4 rounded-2xl">
                <AiOutlineFundProjectionScreen />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
