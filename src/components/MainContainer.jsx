import React from "react";
import ButtonContainer from "./ButtonContainer";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full">
      <div>
        <ButtonContainer />
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
