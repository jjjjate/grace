import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLOmHK6C3YL7wnROreNYEdFv6fSZAbH6hX"

export const AfternoonVideos = () => {

  const [afternoonVideo, setAfternoonVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=20&key=${API}`
      )
      .then((res) => {
        console.log(res);
        setAfternoonVideo(res.data.items);
      })
      .catch(() => {});
  }, []);

  const videoId = [];

  {
    afternoonVideo.map((x) => {
      videoId.push(x.snippet.resourceId.videoId)
    })
  }

  const videoLink = `https://www.youtube.com/watch?v=`;
  const firstVideo = `https://www.youtube.com/watch?v=${videoId[0]}`;

  return (
    <div>
      <h2>VideoMorning</h2>
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
      <div className="grid grid-cols-4 gap-4">
        {afternoonVideo.map((items) => {
          return (
            <div>
              <ReactPlayer
                url={videoLink + items.snippet.resourceId.videoId}
                controls={true}
                playing={false}
                // muted={true}
                width="100%"
                height="40vh"
              />
            </div>
          )
        })}
      </div>
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

export default AfternoonVideos