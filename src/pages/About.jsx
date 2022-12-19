import React from 'react';
import {Link} from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row pt-2">
            <div className="col">
              <Link to="/home">
                <img className="homeLogo" src="./img/home.svg" alt="homeLogo" />
              </Link>
              <img className="arrowLogo" src="./img/arrow.svg" alt="arrowLogo" />
              <Link className="text-decoration-none" to="/about">
                <span className="arrowNav">교회소개</span>
              </Link>
              <img className="arrowLogo" src="./img/arrow.svg" alt="arrowLogo" />
              <Link className="text-decoration-none" to="/about">
                <span className="arrowNav actived">담임목사 인사말</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row py-3 pt-5">
            <h3 className="fw-bold">담임목사 인사말</h3>
          </div>
          <div className="row justify-content-lg-center py-5 bGLine">
            <div className="col-lg-auto text-center">
              <div>
                <img src="" alt="사진"/>
              </div>
              <span className="fOrange">담임목사</span>
              <h3 className="fw-bold">김인천</h3>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-4">
              <img src="" alt="사진"/>
            </div>
            <div className="col-lg-8">
            <span>
              <span className="h4 fw-bold">담임목사로 섬기는 김인천 목사</span>
              는<br/> 건국대학교 법학과와 총신대학교 신학대학원을 졸업,<br/>
              웨스트민스터신학 대학원대학교에서 성경주해(Th,M)를 전공하였습니다.
            </span>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </>
  )
}