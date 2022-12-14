import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLed7M_h-x5SUWWXvadq-Vi8QoQuhB7Fd-"

const MainVideos = () => {

  const [mainVideo, setMainVideo] = useState([]);
  const videoTitles = [];

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=20&key=${API}`
      )
      .then((res) => {
        setMainVideo(res.data.items);
      })
      .catch(() => {});
  }, []);

  const videoId = [];

  for (let i = 0; i < mainVideo.length; i++) {
    const videoIds = mainVideo[i];
    videoId.push(`${videoIds.snippet.resourceId.videoId}`);
  }

  sessionStorage.setItem('title', `${videoTitles[0]}`)

  const firstVideo = `https://www.youtube.com/watch?v=${videoId[0]}`;

  return (
    <>
      <div className="container mx-auto">
        <ReactPlayer
          url={firstVideo}
          controls={true}
          playing={false}
          // muted={true}
          width="100%"
          height="80vh"
        />
      </div>
    </>
  )
}

export const value = sessionStorage.getItem("title")

export default MainVideos