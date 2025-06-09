import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utility/constants";
import VideoItems from "./VideoItems";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../store/searchSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((state) => state.search.videos);
  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);

    const json = await data.json();
    dispatch(addVideos(json.items));
  };
  return (
    <div className="flex flex-wrap">
      {videoList.map((video) => (
        <Link
          to={`/watch?v=${video.id.videoId ? video.id.videoId : video.id}`}
          key={video.id.videoId ? video.id.videoId : video.id}
        >
          <VideoItems video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
