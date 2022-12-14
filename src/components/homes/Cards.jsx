import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div style={{background:"url(img/bg-main002.jpg)"}}>
      <div className="container mx-auto px-16">
        <div className="relative -top-16 lg:block hidden">
          <div className="grid grid-cols-3 items-center bg-pink-50 rounded-xl shadow">
            <Link to="/video" className="border-r-2 float-left hover:text-red-500">
              <img className="w-28 float-left" src="img/serviceIcon.svg" alt=""/>
              <div className="pt-5">
                <h3 className="font-extrabold">예배안내</h3>
                <p className="font-light text-sm">생명의 말씀으로<br />여러분을 초대합니다.</p>
              </div>
            </Link>
            <Link to="/video" className="border-r-2 float-left hover:text-red-500">
              <img className="w-28 float-left" src="img/weeklyIcon.svg" alt=""/>
              <div className="pt-5">
                <h3 className="font-extrabold">주보</h3>
                <p className="font-light text-sm">은혜교회 주간 소식을<br />한 눈에 볼 수 있습니다.</p>
              </div>
            </Link>
            <Link to="/video" className="hover:text-red-500">
              <img className="w-28 float-left" src="img/roadIcon.svg" alt=""/>
              <div className="pt-5">
                <h3 className="font-extrabold">오시는 길</h3>
                <p className="font-light text-sm">이곳에서 함께 예배드릴<br />당신을 기다립니다.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid items-center rounded-xl lg:hidden border-2">
          <Link to="/video" className="border-2 rounded-lg">
            <img className="w-16 float-left" src="img/serviceIcon.svg" alt=""/>
            <div className="pt-5">
                <h3 className="font-bold">예배안내</h3>
              </div>
          </Link>
          <Link to="/video" className="border-2 rounded-lg">
            <img className="w-16 float-left" src="img/weeklyIcon.svg" alt=""/>
            <div className="pt-5">
                <h3 className="font-bold">주보</h3>
              </div>
          </Link>
          <Link to="/video" className="border-2 rounded-lg">
            <img className="w-16 float-left" src="img/roadIcon.svg" alt=""/>
            <div className="pt-5">
                <h3 className="font-bold">오시는 길</h3>
              </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards