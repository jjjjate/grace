import React from 'react';
import { Link } from 'react-router-dom';

const AboutIcon = ({title, name, subTitle}) => {
  return (
    <div>
      <div className="flex flex-none md:px-16">
        <Link to="/home">
          <img className="w-7" src="/img/home.svg" alt="homeLogo"/>
        </Link>
        <img className="w-7 ml-2" src="/img/arrow.svg" alt="arrowLogo"/>
        <p className="pt-1 ml-2 font-extrabold text-sm">{title}</p>
        <img className="w-7 ml-2" src="/img/arrow.svg" alt="arrowLogo"/>
        <p className="pt-1 ml-2 font-extrabold text-sm">{subTitle}</p>
      </div>
      <div className="flex flex-none md:px-16 py-8">
        <h1 className="font-extrabold text-3xl">{name}</h1>
      </div>
    </div>
  )
}

export default AboutIcon