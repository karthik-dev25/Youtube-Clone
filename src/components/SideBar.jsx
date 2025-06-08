import { IoMdHome } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div>
      <div className="px-2 pb-4 m-2 text-sm border-b-1">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="p-2 pb-4 m-2 text-sm border-b-1">
        <ul>
          <li>History</li>
          <li>Playlist</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>
      </div>
      <div className="p-2 pb-4 m-2 text-sm border-b-1">
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Courses</li>
          <li>Podcast</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
