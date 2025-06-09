import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SUGGESTION_API,
} from "../utility/constants";
import { addVideos, cacheResults } from "../store/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const cachedResults = useSelector((state) => state.search.cache);

  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (cachedResults[searchText]) {
      setSuggestions(cachedResults[searchText]);
    } else {
      let timer = setTimeout(() => getSearchSuggestions(), 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchText]);

  const getSearchSuggestions = async () => {
    try {
      let data = await fetch(YOUTUBE_SUGGESTION_API + searchText);
      let jsonData = await data.json();
      setSuggestions(jsonData[1]);
      dispatch(
        cacheResults({
          [searchText]: jsonData[1],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchAPI = async (query) => {
    try {
      let data = await fetch(YOUTUBE_SEARCH_API + query);
      let jsonData = await data.json();
      console.log(jsonData.items);
      dispatch(addVideos(jsonData.items));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-1 items-center">
        <img
          onClick={handleMenu}
          className="h-8"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
        />
        <img
          className="h-6 ml-4"
          alt="youtube-logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="col-span-10">
        <div className="w-1/2 flex justify-start items-center">
          <input
            className="w-full border-1 border-gray-300 rounded-l-full py-1 px-4"
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
          <button className="border-1 border-gray-300 rounded-r-full px-2 py-1">
            🔍
          </button>
          <div className="ml-2 bg-gray-200 border-1 border-gray-200 rounded-full">
            <img
              className="h-8 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTMld20rMx2jURNWXi82x6tzWBwANi-5q-QCjfEX76g&s&ec=72940542"
              alt="mic"
            />
          </div>
        </div>
        {showSearch && (
          <div className="w-1/2 absolute flex justify-start items-center">
            <ul className="w-[23rem] bg-white rounded-lg p-2">
              {suggestion.map((item, index) => (
                <li
                  key={index}
                  className="my-2 hover:bg-gray-200"
                  onClick={() => handleSearchAPI(item)}
                  onFocus={() => setShowSearch(true)}
                  onBlur={() => setShowSearch(false)}
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 items-center">
        <button className="p-1 border-1 border-gray-200 rounded-full">
          ➕ Create
        </button>
        <img
          className="h-6 ml-4"
          src="data:image/png;base64,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"
          alt="notification-icon"
        />
        <img
          className="h-6 ml-4"
          alt="user-icon"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
