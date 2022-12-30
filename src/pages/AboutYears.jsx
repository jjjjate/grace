import React, { useState } from 'react';
import AboutIcon from '../components/about/AboutIcon';

const AboutYears = () => {

  const [years2020, setYears2020] = useState(false)
  const [years2010, setYears2010] = useState(false)
  const [years2000, setYears2000] = useState(false)
  const [years1990, setYears1990] = useState(false)
  
  return (
    <>
      <div className="container mx-auto md:px-8 md:py-8">
        <AboutIcon title="교회소개" subTitle="교회연혁" name="교회연혁" />
        <div className="flex py-5 md:px-16">
          <div 
          onClick={()=>setYears2020(!years2020)}
          className="text-center ml-2 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
          hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:cursor-pointer"
          >
            2020년대
          </div>
          <div 
          onClick={()=>setYears2010(!years2010)}
          className="text-center ml-2 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
          hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:cursor-pointer"
          >
            2010년대
          </div>
          <div 
          onClick={()=>setYears2000(!years2000)}
          className="text-center ml-2 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
          hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:cursor-pointer"
          >
            2000년대
          </div>
          <div 
          onClick={()=>setYears1990(!years1990)}
          className="text-center ml-2 rounded-2xl bg-white border-2 border-gray-400 w-24 text-sm
          hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:cursor-pointer"
          >
            1990년대
          </div>
        </div>
        <div className="md:px-16">
          {
            years2020 ? 
              <div className="w-96">
                <img src="../img/about/2010s.png" alt="" />
              </div>
            : null
          }
          {
            years2010 ? 
              <div className="w-96">
                <img src="../img/about/2010s.png" alt="" />
              </div>
            : null
          }
          {
            years2000 ? 
              <div className="w-96">
                <img src="../img/about/2000s.png" alt="" />
              </div>
            : null
          }
          {
            years1990 ? 
              <div className="w-96">
                <img src="../img/about/1990s.png" alt="" />
              </div>
            : null
          }
        </div>
      </div>
    </>
  )
}

export default AboutYears