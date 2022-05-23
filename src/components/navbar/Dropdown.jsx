import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'

const Dropdown = ({submenus, dropdown, depthLevel}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "mega-menu" : "";
  return (
      <ul className={`sub-menu ${dropdownClass} ${dropdown ? "show" : ""}`}>
          {submenus.map((submenu, index)=>(
              // <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
              <li key={index} items={submenu} className="menu-items">
                  <Link to="/#">{submenu.title}</Link>
              </li>
          )
          
          )}
      </ul>
    
  )
}

export default Dropdown