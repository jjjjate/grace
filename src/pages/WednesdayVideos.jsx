import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLOmHK6C3YL7z2MTDtEcFmPAIzezqTFxnd"

export const WednesdayVideos = () => {

  const [wednesdayVideo, setWednesdayVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=13&key=${API}`
      )
      .then((res) => {
        console.log(res);
        setWednesdayVideo(res.data.items);
      })
      .catch(() => {});
  }, []);

  const videoId = [];

  for (let i = 0; i < wednesdayVideo.length; i++) {
    const videoIds = wednesdayVideo[i];
    videoId.push(`${videoIds.snippet.resourceId.videoId}`);
  }

  const videoLink = `https://www.youtube.com/embed/`;

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <iframe
          src={`${videoLink}${videoId[0]}`}
          width="80%"
          height="700px"
          allowFullScreen
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {wednesdayVideo.slice(1).reverse().map((items, index) => {
          return (
            <div key={index}>
              <h2>{items.snippet.title}</h2>
              <span className="font-extralight">{items.snippet.publishedAt.replace('T', ' ').substring(0, 16)}</span>
              <iframe
                src={videoLink + items.snippet.resourceId.videoId}
                width="100%"
                height="250px"
                allowFullScreen
              />
              <p>{items.snippet.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WednesdayVideos