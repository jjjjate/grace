import React from "react";
import ReactPlayer from "react-player";

export const VideoDetail = (props) => {
  const videoId = props.items.snippet.resourceId.videoId
  const videoTitle = props.items.snippet.title
  const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div>
      <h2>{videoTitle}</h2>
      <div className="items-center">
        <ReactPlayer
          url={videoLink}
          controls
          playing={true}
          width="80%"
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
    </div>
  )
}

export default VideoDetail