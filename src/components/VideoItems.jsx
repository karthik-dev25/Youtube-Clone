const VideoItems = (props) => {
  const channelTitle = props?.video?.snippet?.channelTitle ?? "";
  const thumbnails = props?.video?.snippet?.thumbnails ?? "";
  const title = props?.video?.snippet?.title ?? "";

  return (
    <div className="p-2 m-2 text-xs font-medium hover:bg-gray-200 rounded-lg">
      <div>
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
      </div>
      <div className="w-56">
        <ul className="py-2">
          <li>{title}</li>
          <li>{channelTitle ?? ""}</li>
          <li>{props?.video?.statistics?.viewCount}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoItems;
