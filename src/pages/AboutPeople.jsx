import React from 'react';
import AboutIcon from '../components/about/AboutIcon';
import Profile from '../components/about/Profile';
import Profiles from '../components/about/Profiles';

const AboutPeople = () => {
  const PasterPhoto = (
    <img src="../img/about/paster001.png" alt="" />
    )
  const PastersPhoto = (
    <img src="../img/about/paster002.png" alt="" />
  )
  const oldElderPhoto = (
    <img src="../img/about/elder001.png" alt="" />
  )

  return (
    <>
      <div className="container mx-auto md:py-8">
        <AboutIcon title="교회소개" subTitle="섬기는 사람들" name="섬기는 사람들" />
        <div className="md:mx-auto w-32 flex">
          <img src="../img/about/pastor02.png" alt="" />
          <div>
            <p className="text-orange-200">담임목사</p>
            <h3 className="text-2xl font-bold">김인천</h3>
            <p className="font-light text-gray-400">mjic616@hanmail.net</p>
            <ul className="font-light text-gray-400 text-xs pt-8">
              <li>건국대학교 졸업</li>
              <li>총신대학 신학대학원 졸업</li>
            </ul>
          </div>
        </div>
        <div className="md:mx-16 border-b-2 border-gray-400" />
      </div>
      <Profile title="부목사" image={PasterPhoto} name="백주환" part="행정/청년부/초등부" email="dkrkvp0814@naver.com" />
      <Profile title="전도사" image={PastersPhoto} name="이종탄" part="중고등부" email="2whdxks@hanmail.net" />
      <Profile title="선교사" image="" name="고진석" part="협력 파송 선교사(캄보디아)" email="고진석&김미경 선교사 가정" />
      <Profiles title="시무장로" />
      <Profile title="원로장로" image={oldElderPhoto} name="고재학" />
    </>
  )
}

export default AboutPeople