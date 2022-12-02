import React, {useEffect, useState} from "react";

const API = "AIzaSyB8Qzow1XzdvBiLTO6D86SwR1_j3JiYeQU"
const channelId ="@user-ib3bt2yo1h"

let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10`
console.log(fetchUrl)
export const Videos = () => {
  const [allVideos, setAllVideos] = useState([])
  useEffect(() => {
    fetch(fetchUrl).then((response) => response.json()).then((resJson) => {
      const result = resJson.items.map(doc => ({
        ...doc,
        VideoLink: "https://www.youtube.com/embed/"+doc.id.videoId
      }))
      setAllVideos(result)
    })
  }, [])

  console.log(allVideos)
  return (
    <div>
      <h1>VideoPages</h1>
    </div>
  )
}

export default Videos