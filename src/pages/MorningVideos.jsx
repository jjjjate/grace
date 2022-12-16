import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const playListId = "PLOmHK6C3YL7wsSKr0teH_tUyXfesKYUdk"

export const MorningVideos = () => {

  const [morningVideo, setMorningVideo] = useState([]);
  const [morningBtn, setMorningBtn] = useState(true);


  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=13&key=${API}`
      )
      .then((res) => {
        setMorningVideo(res.data.items);
        sessionStorage.setItem('morningVideo', `${morningVideo}`)
      })
      .catch(() => {});
  }, []);
  
  const videoId = [];

  for (let i = 0; i < morningVideo.length; i++) {
    const videoIds = morningVideo[i];
    videoId.push(`${videoIds.snippet.resourceId.videoId}`);
  }
  
  const videoLink = `https://www.youtube.com/embed/`;

  return (
    <div className="container mx-auto px-16 py-16">
      <div className="flex flex-auto px-36">
        <Link to="/home">
          <img className="w-10" src="/img/home.svg" alt="homeLogo"/>
        </Link>
        <img className="w-10 ml-8" src="/img/arrow.svg" alt="arrowLogo"/>
        <p className="pt-2 ml-8 font-extrabold">설교와 찬양</p>
      </div>
      <div className="flex flex-auto px-36 pt-16">
        <h1 className="font-extrabold text-4xl">설교말씀</h1>
      </div>
      <div className="flex flex-auto px-36 py-8">
        <button className="rounded-2xl bg-white border-2 border-gray-400 w-36 
        hover:bg-orange-400 hover:text-white hover:border-0 
        active:bg-orange-400 active:text-white active:border-0">
          주일오전예배
        </button>
        <button className="ml-4 rounded-2xl bg-white border-2 border-gray-400 w-36 
        hover:bg-orange-400 hover:text-white hover:border-0">
          주일오후예배
        </button>
        <button className="ml-4 rounded-2xl bg-white border-2 border-gray-400 w-36 
        hover:bg-orange-400 hover:text-white hover:border-0">
          수요예배
        </button>
        <button className="ml-4 rounded-2xl bg-white border-2 border-gray-400 w-36 
        hover:bg-orange-400 hover:text-white hover:border-0">
          금요기도회
        </button>
      </div>
      <div className="flex justify-center py-16">
        <iframe
          src={`${videoLink}${videoId[0]}`}
          width="80%"
          height="700px"
          allowFullScreen
        />
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
      <div className="grid grid-cols-4 gap-4">
      {morningVideo.slice(1).reverse().map((items, index) => {
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

export default MorningVideos