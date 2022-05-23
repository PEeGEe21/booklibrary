import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'

const MobileMenuDropdown = ({submenus, dropdown, depthLevel}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "mega-menu" : "";
  return (
      <ul className={`mobile-sub-menu ${dropdownClass} ${dropdown ? "show " : ""}`}>
          {submenus.map((submenu, index)=>(
              // <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
              <li key={index} items={submenu} className="menu-items hover:bg-gray-100 ">
                  <Link to={`${submenu.href}`} className=" px-3 w-full block h-full">{submenu.title}</Link>
              </li>
          )
          
          )}
      </ul>
    
  )
}

export default MobileMenuDropdown