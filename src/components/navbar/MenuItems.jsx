import React, { useState, useEffect, useRef } from 'react'
import { BiWindowOpen } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const MenuItems = ({items, depthLevel}) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

  useEffect(()=>{
    const handler = (e) => {
      if (dropdown && ref.current && !ref.current.contains(e.target)){
        setDropdown(false);

      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return() => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);


  const onMouseEnter = () =>{
    window.innerWidth > 960 && setDropdown(true);
    
  }

  const onMouseLeave = () =>{
    window.innerWidth > 960 && setDropdown(false);

  }
  return (
    <li className='relative' key={items.title} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {items.submenu ? (
            <>
            <button className={`flex text-sm p-5 text-white hover:text-white hover:bg-black/20 cursor-pointer items-center justify-start relative transition ease-in-out duration-300`} aria-expanded={dropdown ? "true" : "false"} onClick={()=>setDropdown((prev) => !prev)}>
            {items.title}{" "} <i className="fa fa-angle-down text-[9px] ml-2"></i>

            </button>
            {depthLevel > 0 ? <span>&raquo;</span>: <span className="arrow"></span>}
            <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
            </>

        )
            : 
            (
               <Link to="" className={`flex text-sm p-5 text-white hover:text-white hover:bg-black/20 cursor-pointer items-center justify-start relative transition ease-in-out duration-300`}>
                                    {items.title}
                                
                                    </Link> 
            )
    }
                                    
                                </li>
  )
}

export default MenuItems