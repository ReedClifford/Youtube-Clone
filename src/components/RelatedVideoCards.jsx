import useYoutubeData from "../hooks/useYoutubeData";
const RelatedVideoCards = ({ title, channelTitle, id, img, vidId }) => {
  const { selectVideo, currentVidTitle, videoChannel } = useYoutubeData();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentActiveVideo = () => {
    selectVideo(vidId);
    currentVidTitle(title);
    videoChannel(channelTitle);
    scrollToTop();
  };

  return (
    <div
      onClick={currentActiveVideo}
      className="grid grid-cols-2 h-32 gap-2 rounded-lg shadow hover:cursor-pointer
      hover:bg-neutral-300 hover:shadow-neutral-300
       hover:dark:bg-neutral-900 hover:dark:shadow-black
      duration-300 ease-in-out"
      key={id}
    >
      <div className="w-full h-full ">
        <img
          src={img}
          alt={title}
          className="rounded-xl object-fill  object-center"
        />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="font-semibold text-md overflow-hidden text-neutral-800 dark:text-neutral-300">
          {title}
        </h2>
        <span className="text-sm text-neutral-700 dark:text-neutral-400">
          {channelTitle}
        </span>
      </div>
    </div>
  );
};
export default RelatedVideoCards;
