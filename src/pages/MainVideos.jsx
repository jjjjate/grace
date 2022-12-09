import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLOmHK6C3YL7wnROreNYEdFv6fSZAbH6hX"

export const videoTitles = [];

const MainVideos = () => {

  const [mainVideo, setMainVideo] = useState([]);

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


  {
    mainVideo.map((x) => {
      videoId.push(x.snippet.resourceId.videoId)
    })
  }

  {
    mainVideo.map((x) => {
      videoTitles.push(x.snippet.title)
    })
  }

  const firstVideo = `https://www.youtube.com/watch?v=${videoId[0]}`;

  return (
    <div>
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
      <div>
        <a
          className="border border-blue-500 bg-blue-600
            hover:bg-blue-500 text-white"
          href="https://www.youtube.com/@user-ib3bt2yo1h"
          target="_blank"
        >
          유튜브 바로가기
        </a>
      </div>
    </div>
  )
}

export default MainVideos