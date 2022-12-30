import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ background: '#717171' }} className="py-5">
      <div className='container mx-auto px-16 pb-4'>
        <div className='flex justify-between py-5'>
          <Link to="/"><img className="inline w-48" src="../img/footer/Logo_White.png" alt="" /></Link>
          <span className="text-local-gray py-3">
            <span className="border-r-2 px-2 border-local-gray">
              이용약관
            </span>
            <span className="px-2">
              이메일무단수집거부
            </span>
          </span>
        </div>
        <div className='text-left py-3' style={{color: "#FFFFFF"}}>
          <p className="pt-3 text-light">16539 경기도 수원시 영통구 산남로 21번길8</p>
        </div>
        <div className='flex justify-between pb-5'>
          <span className="text-light" style={{color: "#FFFFFF"}}>
            T. 031 216-1071
            <span className="text-light px-10">
              W. https://www.example.com
            </span>
          </span>
          <span>
            <Link to="/login" style={{background: '#494949'}} className="px-3 py-1 text-local-gray">
              관리자 모드
            </Link>
          </span>
        </div>
        <div className="border-t-2 border-local-gray py-5">
          <span className="text-local-gray">
            Copyright 2022 GRACECHUCRCH. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer