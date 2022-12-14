import React from "react";
import { Link } from 'react-router-dom';
import MainVideos from "../../pages/MainVideos";
import { value } from '../../pages/MainVideos';

const MainVideo = () => {
  
  console.log(value)

  return (
    <>
      <div className="container mx-auto px-16 pt-20 flex flex-row">
        <div className="basis-1/4 py-3 relative">
          <div className="float-left py-3">
            <h1 className="text-left py-5 text-2xl font-extrabold">금주의 말씀</h1>
            <h2>{value}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deleniti?</p>
            <span></span>
          </div>
          <Link to="/video/morning"
          className="border border-local-orange bg-white rounded-xl
            hover:bg-local-orange hover:text-white text-local-orange
            py-2 px-4 absolute left-0 bottom-0"
          >
            말씀더보기 >
          </Link>
        </div>
        <div className="basis-3/4">
          <MainVideos />
        </div>
      </div>

    </>
  )
}

export default MainVideo