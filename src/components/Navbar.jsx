import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto flex p-4 z-[100] justify-between">
      <div className="">
        <img className="logo w-60" src='/img/Logo.png' alt="logo"/>
      </div>
      <div className='justify-between'>
        <button>first</button>
        <button>second</button>
        <button>third</button>
        <button>fourth</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar