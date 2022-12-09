import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="container mx-auto px-16">
      <div className="relative -top-20 lg:block hidden">
        <div className="grid grid-cols-3 items-center bg-pink-50 rounded-xl shadow">
          <Link to="/video" className="border-r-2 float-left">
            <img className="w-32 float-left" src="img/serviceIcon.svg" alt=""/>
            <div className="pt-5">
              <h3 className="font-bold">안내</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
          <Link to="/video" className="border-r-2 float-left">
            <img className="w-32 float-left" src="img/weeklyIcon.svg" alt=""/>
            <div className="pt-5">
              <h3 className="font-bold">보</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
          <Link to="/video">
            <img className="w-32 float-left" src="img/roadIcon.svg" alt=""/>
            <div className="pt-5">
              <h3 className="font-bold">길</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center bg-pink-50 rounded-xl lg:hidden">
        <Link to="/video">
          <img className="w-28" src="img/serviceIcon.svg" alt=""/>
        </Link>
        <Link to="/video">
          <img className="w-28" src="img/weeklyIcon.svg" alt=""/>
        </Link>
        <Link to="/video">
          <img className="w-28" src="img/roadIcon.svg" alt=""/>
        </Link>
      </div>
    </div>
  )
}

export default Cards