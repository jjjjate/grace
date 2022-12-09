import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLOmHK6C3YL7wsSKr0teH_tUyXfesKYUdk"

export const MorningVideos = () => {

  const [morningVideo, setMorningVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=20&key=${API}`
      )
      .then((res) => {
        console.log(res);
        setMorningVideo(res.data.items);
      })
      .catch(() => {});
  }, []);

  const videoId = [];

  {
    morningVideo.map((x) => {
      videoId.push(x.snippet.resourceId.videoId)
    })
  }

  const videoLink = `https://www.youtube.com/watch?v=`;
  const firstVideo = `https://www.youtube.com/watch?v=${videoId[0]}`;

  return (
    <div className="container mx-auto">
      <div>
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
      {morningVideo.map((items) => {
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
    </div>
  )
}

export default MorningVideos