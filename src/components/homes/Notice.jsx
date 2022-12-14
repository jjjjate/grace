import React from 'react';
import { Link } from 'react-router-dom';
import NoticeCards from './NoticeCards';

const Notice = () => {
  return (
    <div className='container mx-auto px-16'>
      <div className='flex justify-between py-4'>
        <h1 className="text-left py-5 text-2xl font-extrabold">은혜 소식</h1>
        <div className='flex justify-between pt-10'>
          <Link to="/video" className="">
            <span className='float-left text-local-gray'>
              더보기
            </span>
            <img className="w-6" src="/img/moreBtn.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 text-center">
        <NoticeCards />
        <NoticeCards />
        <NoticeCards />
        <NoticeCards />
      </div>
    </div>
  )
}

export default Notice