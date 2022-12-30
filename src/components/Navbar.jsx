import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from "./navbars/NavLinks";

const Navbar = () => {
  const [open, setOpen] =useState(false)
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around shadow">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img
              className="cursor-pointer h-10"
              src="../img/Logo.png"
              alt="logo"
            />
          </Link>
          <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${ open ? "close" : "menu" }`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-end gap-1">
          <NavLinks />
        </ul>
        <ul className={`
        md:hidden bg-white absolute w-full h-full
        bottom-0 py-24 pl-4 duration-500
        ${ open ? "left-0" : "left-[-100%]"}
        `}>
          <NavLinks />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;