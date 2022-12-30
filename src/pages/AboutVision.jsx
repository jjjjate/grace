import React from 'react';
import AboutIcon from '../components/about/AboutIcon';

const AboutVision = () => {
  return (
    <>
      <div className="container mx-auto px-8 md:py-8">
        <AboutIcon title="교회소개" subTitle="은혜교회 비전" name="은혜교회비전" />
        <div className="px-8 pb-16">
          <img src="../img/about/main.png" alt="" />
        </div>
        <h1 className="text-center font-extrabold text-3xl">은혜교회를 소개합니다</h1>
        <div className="px-8 w-8/12 py-8">
          <img src="../img/about/sub01.png" alt="" />
        </div>
        <div className="flex pb-8">
          <div className="px-8 w-4/12" />
          <div className="px-8 w-8/12">
            <img src="../img/about/sub02.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-orange-300 py-8">
        <h1 className="text-center py-8 text-3xl">사명선언</h1>
        <p className="text-center text-sm pb-6">
          은혜교회는 예수님을 구주로 고백하는 사람들의 공동체입니다.<br />
          우리는 복의 근원이신 하나님을 믿고 순종함으로 세상에<br />
          복을 전달하는 복의 통로로서 지역과 민족과 열방을 섬기는 충성되고 헌신된 삶을 살아가겠습니다.
        </p>
      </div>
      <div className="px-32">
        <h1 className="text-center text-3xl py-8">우리들의 다짐</h1>
        <div className="sm:hidden">
          <img src="../img/about/card01.png" alt="" />
          <img src="../img/about/card02.png" alt="" />
          <img src="../img/about/card03.png" alt="" />
          <img src="../img/about/card04.png" alt="" />
        </div>
        <div className="hidden sm:block">
          <div className="grid grid-cols-4">
            <img src="../img/about/card01.png" alt="" />
            <img src="../img/about/card02.png" alt="" />
            <img src="../img/about/card03.png" alt="" />
            <img src="../img/about/card04.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutVision