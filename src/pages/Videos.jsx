import React, {useEffect, useState} from "react";
import axios from "axios";
// import {useParams} from "react-router-dom";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
// const channelId ="UCpNfYpL9wvjEwWDJikG1KUQ"
// const channelId ="UCUj6rrhMTR9pipbAWBAMvUQ" 침착
const channelId ="UCIUfR-2qcpWqgAIfZJXOLWA"  /* 수빙 */

  // `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API}&q=${channelId}&maxResult=20&type=video&videoEmbeddable=true`

// let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10`
// console.log(fetchUrl)
export const Videos = () => {
  const [videoList, setVideoList] = useState([]);
  const [videoInfo, setVideoInfo] = useState([]);
  const [morning, setMorning] = useState([]);
  const [afternoon, setAfternoon] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [friday, setFriday] = useState([]);

  // let { id } = useState();
  // let videoId = [];

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=20&key=${API}`
      )
      .then((res) => {
        console.log(res);
        setVideoList(res.data.items);
        setMorning(res.data.items[0].id)
        setAfternoon(res.data.items[1].id)
        setWednesday(res.data.items[2].id)
        setFriday(res.data.items[3].id)

      })
      .catch(() => {});
  }, []);

  console.log(videoList);

  // videoList.map((x) => {
  //   videoId.push(x.id)
  // })
  //
  // console.log(videoId);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${morning}&maxResults=20&key=${API}`
      )
      .then((res) => {
        console.log(res);
        setMorning(res.data.items);
      })
      .catch(() => {});
  }, [videoList]);

  console.log(morning)

  return (
    <div>
      <h1>VideoPages</h1>
    </div>
  )
}

export default Videos