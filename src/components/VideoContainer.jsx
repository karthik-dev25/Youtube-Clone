import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utility/constants";
import VideoItems from "./VideoItems";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  console.log("videoList",videoList)
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
        <Link to={'/watch?v='+video.id} key={video.id}><VideoItems video={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
