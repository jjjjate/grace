import React from "react";
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";

export const VideoDetail = () => {

  let { videoId } = useParams();
  let videoLink = "https://www.youtube.com/watch?v=" + videoId;
  return (
    <div>
      <ReactPlayer
        url={videoLink}
        controls
        playing={true}
        width="100%"
        height="88vh"
      />
      <div>
        <button
          className="border border-blue-500 bg-blue-600
          hover:bg-blue-500 text-white"
        >
          유튜브 바로가기
        </button>
      </div>
    </div>
  )
}

export default VideoDetail