import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
// const channelId ="UCpNfYpL9wvjEwWDJikG1KUQ"
// const channelId ="UCUj6rrhMTR9pipbAWBAMvUQ" 침착
const channelId ="UCIUfR-2qcpWqgAIfZJXOLWA"  /* 수빙 */

  // `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API}&q=${channelId}&maxResult=20&type=video&videoEmbeddable=true`

// let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10`
// console.log(fetchUrl)
export const Videos = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=20&key=${API}`
      )
      .then((res) => {
        console.log(res);
        setVideoList(res.data.items);
      })
      .catch(() => {});
  }, []);
  console.log(videoList)

  const videoIds = [];
  for (let i=0; i<videoList.length; i++) {
    videoIds.push(/*"&id=" + */videoList[i][Object.keys(videoList[i])[2]]);
  }

  console.log(videoIds)

  // const videoIdString = videoIds.join("");

  // console.log(videoIdString)

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics${videoIdString}&maxResults=20&key=${API}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setVideoInfo(res.data.items);
  //     })
  //     .catch(() => {});
  // }, [videoList]);
  //
  // console.log(videoInfo)

  return (
    <div>
      <h1>Videos</h1>
      <div>
        <Link to="/video/morning">
          <button>모닝</button>
        </Link>
      </div>
      <div>
        <Link to="/video/afternoon">
          <button>눈</button>
        </Link>
      </div>
      <div>
        <Link to="/video/wednesday">
          <button>웬</button>
        </Link>
      </div>
      <div>
        <Link to="/video/friday">
          <button>프라이</button>
        </Link>
      </div>
    </div>
  )
}

export default Videos