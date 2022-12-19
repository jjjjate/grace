import React, { useEffect, useState } from "react";
import axios from "axios";
import Icons from '../components/videos/Icons';

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLOmHK6C3YL7wsSKr0teH_tUyXfesKYUdk"

export const MorningVideos = () => {

  const [morningVideo, setMorningVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=7&key=${API}`
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
            <div className="py-4" key={index}>
              <h1 className="pb-2 text-extrabold text-2xl text-orange-400 px-16">주일 오전 예배</h1>
              <h1 className="text-2xl text-extrabold px-16">{title.snippet.title}</h1>
              <div className="py-2 px-16">
                <p className="text-extralight text-sm text-gray-500">
                  {title.snippet.publishedAt.replace('T', ' ').substring(0, 11)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="border-b-2 pb-16"></div>
      <div className="py-4 px-16">
        <h1 className="text-2xl text-extrabold">말씀 요약</h1>
      </div>
      <div className="container mx-auto px-16 py-16">
        <div className="grid pb-4">
          <h1 className="font-extrabold text-4xl">다른 설교말씀</h1>
        </div>
        <div className="lg:block hidden">
          <div className="grid grid-cols-3 gap-4">
            {morningVideo.slice(1).reverse().map((items, index) => {
              return (
                <div key={index}>
                  <iframe
                    title="subFrames"
                    src={videoLink + items.snippet.resourceId.videoId}
                    width="100%"
                    allowFullScreen
                  />
                  <h2>{items.snippet.title}</h2>
                  <span className="font-extralight">{items.snippet.publishedAt.replace('T', ' ').substring(0, 11)}</span>
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
                  <iframe
                    title="subFrames"
                    src={videoLink + items.snippet.resourceId.videoId}
                    width="100%"
                    height="350px"
                    allowFullScreen
                  />
                  <h2>{items.snippet.title}</h2>
                  <span className="font-extralight">{items.snippet.publishedAt.replace('T', ' ').substring(0, 11)}</span>
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
                  <iframe
                    title="subFrames"
                    src={videoLink + items.snippet.resourceId.videoId}
                    width="100%"
                    height="350px"
                    allowFullScreen
                  />
                  <h2>{items.snippet.title}</h2>
                  <span className="font-extralight">{items.snippet.publishedAt.replace('T', ' ').substring(0, 11)}</span>
                  <p>{items.snippet.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        더 많은 영상은 
        <a 
        className="rounded-md bg-red-500 text-black hover:text-red-600 hover:bg-black" 
        href="https://m.youtube.com/channel/UCpNfYpL9wvjEwWDJikG1KUQ"
        >
          유튜브
        </a>
      </div>
    </div>
  )
}

export default MorningVideos