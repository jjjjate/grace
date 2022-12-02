import React, {useEffect, useState} from "react";
import axios from "axios";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const channelId ="UCpNfYpL9wvjEwWDJikG1KUQ"

// let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10`
// console.log(fetchUrl)
export const Videos = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&key=${API}`
      )
      .then((res) => {
        console.log(res);
        setPlaylist(res.data.items);
      })
      .catch(() => {});
  }, []);

  console.log(playlist);

  return (
    <div>
      <h1>VideoPages</h1>
    </div>
  )
}

export default Videos