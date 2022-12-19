import React from 'react';
import { Link } from 'react-router-dom';

const Icons = () => {
  return (
    <div>
      <div className="flex flex-none px-20">
        <Link to="/home">
          <img className="w-10" src="/img/home.svg" alt="homeLogo"/>
        </Link>
        <img className="w-10 ml-4" src="/img/arrow.svg" alt="arrowLogo"/>
        <p className="pt-2 ml-4 font-extrabold text-sm">설교와 찬양</p>
      </div>
      <div className="flex flex-none px-20 pt-16">
        <h1 className="font-extrabold text-4xl">설교말씀</h1>
      </div>
      <div className="flex flex-none px-20 py-8">
        <button 
        className="rounded-2xl text-white bg-orange-400 border-2 border-orange-400 w-24 text-sm"
        >
          주일오전예배
        </button>
        <button className="ml-4 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
        hover:bg-orange-400 hover:text-white hover:border-0">
          주일오후예배
        </button>
        <button className="ml-4 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
        hover:bg-orange-400 hover:text-white hover:border-0">
          수요예배
        </button>
        <button className="ml-4 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
        hover:bg-orange-400 hover:text-white hover:border-0">
          금요기도회
        </button>
      </div>
    </div>
  )
}

export default Icons