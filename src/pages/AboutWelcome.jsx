import React from 'react';
import AboutIcon from '../components/about/AboutIcon';

const AboutWelcome = () => {
  return (
    <>
      <div className="container mx-auto md:px-8 md:py-8">
        <AboutIcon title="교회소개" subTitle="담임목사 인사말" name="담임목사인사말" />
        <div className="mx-auto w-32">
          <img src="../img/about/pastor01.png" alt="" />
          <div className="text-center py-4 pb-8">
            <h5 className="text-orange-300">담임목사</h5>
            <h1 className="text-3xl font-bold">김인천</h1>
          </div>
        </div>
        <div className="md:mx-16 border-b-2 border-gray-400" />
        <figure className="md:px-16 lg:flex py-8">
          <div className="w-40 h-48 md:w-48 md:h-auto mx-auto">
            <img src="../img/about/pastor02.png" alt="" />
          </div>
          <figcaption class="font-medium lg:relative lg:top-32">
            <span className="font-bold text-center md:text-left">담임목사로 섬기는 김인천 목사</span>는<br />
            건국대학교 법학과와 총신대학교 신학대학원을 졸업,<br />
            웨스트민스터신학 대학원대학교에서 성경주해(Th,M)를 전공하였습니다.
          </figcaption>
        </figure>
        <div className="md:mx-16 lg:flex gap-2">
          <div className="w-6/12 h-96 bg-pink-300"></div>
          <div className="w-6/12 h-96">
            <div className="h-3/6 bg-gray-400">123</div>
            <div className="h-3/6 bg-gray-200">456</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutWelcome