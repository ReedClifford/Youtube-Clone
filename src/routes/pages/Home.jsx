import { Fragment, useEffect } from "react";
import VideoCards from "../../components/VideoCards";
import useYoutubeData from "../../hooks/useYoutubeData";
import { fetchFromAPi } from "../../utilities/fetchData";
const Home = () => {
  const { stableInput, youtubeData, stableHandleData } = useYoutubeData();

  //refractor this ugly code
  useEffect(() => {
    const data = async () => {
      const { items } = await fetchFromAPi(stableInput);
      stableHandleData(items);
    };
    data();
  }, [stableHandleData, stableInput]);

  const renderedVideos = youtubeData.map((item, idx) => {
    const { thumbnails, title, channelTitle } = item.snippet;
    return (
      <Fragment key={idx}>
        <VideoCards
          vidId={item.id.videoId}
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
export default Home;
