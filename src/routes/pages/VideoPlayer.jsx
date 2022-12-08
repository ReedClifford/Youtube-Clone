import { useEffect } from "react";
import { AiOutlineFundProjectionScreen, AiTwotoneLike } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import RelatedVideoCards from "../../components/RelatedVideoCards";
import useYoutubeData from "../../hooks/useYoutubeData";
import { fetchRelatedVideos } from "../../utilities/fetchData";

const VideoPlayer = () => {
  const {
    stableVidId,
    vidTitle,
    vidChannel,
    handleRelatedVideos,
    relatedVideos,
  } = useYoutubeData();

  useEffect(() => {
    const related = async () => {
      const { items } = await fetchRelatedVideos(stableVidId);
      handleRelatedVideos(items);
    };
    related();
    console.log(relatedVideos);
  }, [stableVidId]);

  const renderedRelatedVideoCards = relatedVideos.map((video, idx) => {
    const { title, channelTitle } = video.snippet;
    return (
      <RelatedVideoCards
        title={title}
        channelTitle={channelTitle}
        id={idx}
        img={video.snippet.thumbnails.medium.url}
        vidId={video.id.videoId}
      />
    );
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-5 lg:ml-1 gap-5 lg:gap-2">
        <div className="border dark:border-none rounded-lg lg:col-span-4 ">
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
        <div className="grid gap-3 lg:w-96 lg:cols-span-1 lg:ml-2  text-white">
          {renderedRelatedVideoCards}
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
