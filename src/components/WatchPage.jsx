import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { Link, useSearchParams } from "react-router";
import {
  COMMENTS_API,
  Watch_Video_API,
  YOUTUBE_VIDEO_API,
} from "../utility/constants";
import WatchVideoContainer from "./WatchVideoContainer";
import CommentsSection from "./CommentsSection";
import MostPopularVideos from "./MostPopularVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const VideoID = searchParams.get("v");

  //   VideoData
  const [videoData, setVideoData] = useState([]);
  //   Comments Data
  const [comments, setComments] = useState([]);
  // Most Popular Videos
  const [mostPopularVideos, setMostPopularVideos] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
    getComments();
    getMostPopularVideo();
  }, []);

  const getVideoData = async () => {
    try {
      let videoData = await fetch(Watch_Video_API + VideoID);
      let jsonData = await videoData.json();
      setVideoData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  const getComments = async () => {
    try {
      let commentsData = await fetch(COMMENTS_API + VideoID);
      let jsonData = await commentsData.json();
      setComments(
        jsonData.items.map((items) => {
          return { ...items.snippet.topLevelComment.snippet, id: items.id };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getMostPopularVideo = async () => {
    try {
      let videosData = await fetch(YOUTUBE_VIDEO_API);
      let jsonData = await videosData.json();
      setMostPopularVideos(jsonData.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full m-auto flex justify-center py-2">
      <div className="w-1/2 flex justify-start  flex-col mr-5">
        <WatchVideoContainer VideoID={VideoID} videoData={videoData} />
        <div>
          <h1 className="font-bold mx-2 my-4">{comments.length} Comments</h1>
          {comments.map((items) => (
            <CommentsSection key={items.id} commentsData={items} />
          ))}
        </div>
      </div>
      <div className="w-[30%] ml-5">
        {mostPopularVideos.map((items) => (
          <Link to={"/watch?v=" + items.id} key={items.id}>
            <MostPopularVideos video={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
