import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ background: '#132332' }}>
      <div className='container mx-auto'>
        <div className='text-center'>
          <p className="pt-3 text-light">16539 경기도 수원시 영통구 산남로 21번길8</p>
          <p className="text-light">T. 031 216-1071</p>
          <p className="text-light">W. https://www.example.com</p>
        </div>
        <div className='text-end'>
          <Link to="/login">X</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer