import React from "react";
import MainVideos from "../../pages/MainVideos";
import { videoTitles } from "../../pages/MainVideos";

const MainVideo = () => {
  const title = videoTitles[0];
  sessionStorage.setItem("title", JSON.stringify(title))
  sessionStorage.getItem("title")
  const data = sessionStorage.getItem("title")
  console.log(data)

  return (
    <>
     <div className="container mx-auto px-16 pt-20">
       <div className="float-left">
         <h1 className="text-center">Main</h1>
         <h2>{data}</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deleniti?</p>
         <span></span>
       </div>
       <div>
         <MainVideos />
       </div>
     </div>
    </>
  )
}

export default MainVideo