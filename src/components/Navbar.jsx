import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto flex p-4 z-[100] justify-between">
      <div className="">
        <img className="logo w-60" src='/img/Logo.png' alt="logo"/>
      </div>
      <div className='justify-between'>
        <button>예배안내</button>
        <button>설교와 찬양</button>
        <button>교회학교</button>
        <button>교회소식</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar