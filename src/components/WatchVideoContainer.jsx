const WatchVideoContainer = (props) => {
    const {VideoID,videoData} = props;
    const {snippet} = videoData.items ? videoData.items[0] : [];
  return (
    <div className="w-full">
      <iframe
        className="rounded-xl"
        width="100%"
        height="415"
        src={"https://www.youtube.com/embed/" + VideoID}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p className="my-2 font-bold text-md">{snippet && snippet.title ? snippet.title : ""}</p>
      <div className="flex my-4 items-center">
        <img className="rounded-lg h-10 mr-2" src={snippet && snippet.thumbnails.default.url} alt="logo" />
        <p className="rounded-lg text-sm font-bold">{snippet && snippet.channelTitle}</p>
      </div>
      <p className="my-4 bg-gray-100 p-4 rounded-lg text-sm">
        {snippet && snippet.localized.description}
      </p>
    </div>
  );
};

export default WatchVideoContainer;
