import React, {useState} from "react";
import list from './MainList.json'
import anotherList from './AnotherList.json'
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'none',
      color: isActive ? 'orange' : 'black',
    }
  }

  return (
    <>
      <button
        onMouseOver={() => setIsOpen((prev) => !prev)}
        onMouseOut={() => setIsOpen(false)}
        className="w-16"
      >
        교회소개
        <ul className="relative flex gap-2 w-48 md:-top-2">
          {isOpen && <div className="bg-white absolute md:top-2">
            {list.map((item, i) => (
              <div className="flex justify-between hover:bg-blue-300 cursor-pointer p-2" key={i}>
                <h3><NavLink to={item.link}>{item.id}</NavLink></h3>
              </div>
            ))}
          </div>}
        </ul>
      </button>
      <ul className="relative flex gap-2 w-full top-0">
        {anotherList.map((item, i) => (
          <NavLink style={navLinkStyles} to={item.link} key={i} className="md:block hidden w-full">{item.id}</NavLink>
        ))}
      </ul>
      {anotherList.map((item, i) => (
        <NavLink style={navLinkStyles} key={i} className="md:hidden lg:hidden" to={item.link}><button className="py-2 w-full text-left">{item.id}</button></NavLink>
      ))}
    </>
  )
}

export default NavLinks