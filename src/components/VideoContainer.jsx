import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utility/constants";
import VideoItems from "./VideoItems";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);

    const json = await data.json();
    setVideoList(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videoList.map((video) => (
        <VideoItems key={video.snippet.channelId} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
