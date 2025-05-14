import { useSelector } from "react-redux";
import { IoMdHome } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if (isMenuOpen)
    return (
      <div className="flex item-center pl-2 pb-4 m-2 text-xs border-b-1">
        <ul>
          <li className="flex flex-col item-center justify-center">
            <div>
              <IoMdHome />
            </div>
            <div>Home</div>
          </li>
          <li className="flex flex-col item-center justify-center">
            <span >
              <BsFillCameraVideoFill/>
            </span>
            <div>Shorts</div>
          </li>
          <li className="flex flex-col item-center justify-center">
            <div className="text-lg">📼</div>
            <div>Subscriptions</div>
          </li>
        </ul>
      </div>
    );
  return (
    <div>
      <div className="px-2 pb-4 m-2 text-sm border-b-1">
        <ul>
          <li>
            <span>🏡</span>Home
          </li>
          <li>
            <span>📺</span>Shorts
          </li>
          <li>
            <span>📼</span>Subscriptions
          </li>
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
