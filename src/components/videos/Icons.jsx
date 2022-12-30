import React from 'react';
import { Link } from 'react-router-dom';

const Icons = ({title, name}) => {
  return (
    <div>
      <div className="flex flex-none md:px-8">
        <Link to="/home">
          <img className="w-7" src="/img/home.svg" alt="homeLogo"/>
        </Link>
        <img className="w-7 ml-2" src="/img/arrow.svg" alt="arrowLogo"/>
        <p className="pt-1 ml-2 font-extrabold text-sm">{title}</p>
      </div>
      <div className="flex flex-none px-16 py-8">
        <h1 className="font-extrabold text-3xl">{name}</h1>
      </div>
      <div className="flex py-5 md:px-16">
        <div 
        className="text-center rounded-2xl text-white bg-orange-400 border-2 border-orange-400 w-22 text-sm
        hover:cursor-pointer"
        >
          주일오전예배
        </div>
        <div 
        className="text-center ml-2 rounded-2xl bg-white border-2 border-gray-400 w-22 text-sm
        hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:cursor-pointer"
        >
          주일오후예배
        </div>
        <div 
        className="text-center ml-2 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
        hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:cursor-pointer"
        >
          수요예배
        </div>
        <div 
        className="text-center ml-2 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
        hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:cursor-pointer"
        >
          금요기도회
        </div>
      </div>
    </div>
  )
}

export default Icons