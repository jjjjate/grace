import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Icons from '../components/videos/Icons';

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLOmHK6C3YL7wsSKr0teH_tUyXfesKYUdk"

export const MorningVideos = () => {

  const [morningVideo, setMorningVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=13&key=${API}`
      )
      .then((res) => {
        setMorningVideo(res.data.items);
      })
      .catch(() => {});
  }, []);
  
  const videoId = [];

  for (let i = 0; i < morningVideo.length; i++) {
    const videoIds = morningVideo[i];
    videoId.push(`${videoIds.snippet.resourceId.videoId}`);
  }

  const videoLink = `https://www.youtube-nocookie.com/embed/`;

  return (
    <div className="container mx-auto px-16 py-16">
      <Icons />
      <div>
        <div className="hidden lg:block">
          <div className="flex justify-center">
            <iframe
              title="mainFrame"
              src={`${videoLink}${videoId[0]}`}
              width="90%"
              height="550rem"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <iframe
            title="mainFrame"
            src={`${videoLink}${videoId[0]}`}
            width="100%"
            height="360rem"
            allowFullScreen
          />
        </div>
      </div>
      <div>
        {morningVideo.slice(0,1).map((title, index) => {
          return (
            <div key={index}>
              <h1>주일 오전 예배</h1>
              <h1>{title.snippet.title}</h1>
              <span>{title.snippet.publishedAt.replace('T', ' ').substring(0, 16)}</span>
            </div>
          )
        })}
      </div>
      <div className="lg:block hidden">
        <div className="grid grid-cols-3 gap-4">
          {morningVideo.slice(1).reverse().map((items, index) => {
            return (
              <div key={index}>
                <h2>{items.snippet.title}</h2>
                <span className="font-extralight">{items.snippet.publishedAt.replace('T', ' ').substring(0, 16)}</span>
                <iframe
                  title="subFrames"
                  src={videoLink + items.snippet.resourceId.videoId}
                  width="100%"
                  allowFullScreen
                />
                <p>{items.snippet.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="sm:hidden md:block lg:hidden hidden">
        <div className="grid grid-cols-2 gap-4">
          {morningVideo.slice(1).reverse().map((items, index) => {
            return (
              <div key={index}>
                <h2>{items.snippet.title}</h2>
                <span className="font-extralight">{items.snippet.publishedAt.replace('T', ' ').substring(0, 16)}</span>
                <iframe
                  title="subFrames"
                  src={videoLink + items.snippet.resourceId.videoId}
                  width="100%"
                  height="350px"
                  allowFullScreen
                />
                <p>{items.snippet.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="md:hidden lg:hidden">
        <div className="grid grid-cols-1">
          {morningVideo.slice(1).reverse().map((items, index) => {
            return (
              <div key={index}>
                <h2>{items.snippet.title}</h2>
                <span className="font-extralight">{items.snippet.publishedAt.replace('T', ' ').substring(0, 16)}</span>
                <iframe
                  title="subFrames"
                  src={videoLink + items.snippet.resourceId.videoId}
                  width="100%"
                  height="350px"
                  allowFullScreen
                />
                <p>{items.snippet.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MorningVideos