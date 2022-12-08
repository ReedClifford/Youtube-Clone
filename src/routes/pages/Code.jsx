import { Fragment, useEffect } from "react";
import VideoCards from "../../components/VideoCards";
import useYoutubeData from "../../hooks/useYoutubeData";
import { fetchFromAPi } from "../../utilities/fetchData";
const Code = () => {
  const { youtubeData, stableHandleData } = useYoutubeData();

  //refractor this ugly code
  useEffect(() => {
    const data = async () => {
      const { items } = await fetchFromAPi("Code");
      stableHandleData(items);
    };
    data();
  }, [stableHandleData]);

  const renderedVideos = youtubeData.map((item, idx) => {
    const { thumbnails, title, channelTitle } = item.snippet;
    return (
      <Fragment key={idx}>
        <VideoCards
          title={title}
          img={thumbnails.medium.url}
          channel={channelTitle}
        />
      </Fragment>
    );
  });

  return (
    <div className="min-h-screen  py-20">
      <div className="container mx-auto px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
        {renderedVideos}
      </div>
    </div>
  );
};
export default Code;
