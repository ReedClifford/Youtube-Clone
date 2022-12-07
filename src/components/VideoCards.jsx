import { GoVerified } from "react-icons/go";
const VideoCards = ({ title, img, channel }) => {
  return (
    <div
      className=" text-neutral-900  duration-300 ease-in-out cursor-pointer dark:text-neutral-300 hover:shadow-lg 
      hover:rounded-xl hover:scale-110  dark:hover:rounded-xl dark:hover:bg-neutral-900 dark:hover:shadow-black dark:hover:shadow-md"
    >
      <div className="w-full bg-none flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="object-fit object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 mt-2 p-4">
        <h1>{title}</h1>
        <p className="flex items-center gap-3 text-sm">
          {channel}
          <GoVerified />
        </p>
      </div>
    </div>
  );
};
export default VideoCards;
