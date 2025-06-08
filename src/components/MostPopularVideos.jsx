const MostPopularVideos = (props) =>{
   const channelTitle = props?.video?.snippet?.channelTitle ?? "";
  const thumbnails = props?.video?.snippet?.thumbnails ?? "";
  const title = props?.video?.snippet?.title ?? "";

  return (
    <div className="w-11/12 m-auto flex items-center justify-between text-xs font-medium hover:bg-gray-200 rounded-lg">
      <div>
        <img
          className="rounded-lg w-30 mr-4"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
      </div>
      <div className="w-56">
        <ul className="py-2">
          <li className="overflow-hidden text-ellipsis">{title}</li>
          <li>{channelTitle ?? ""}</li>
          <li>{props?.video?.statistics?.viewCount} Views</li>
        </ul>
      </div>
    </div>
  );
}

export default MostPopularVideos;