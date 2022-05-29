import React, { useState, useEffect, useRef } from 'react'
import { BiWindowOpen } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import MobileMenuDropdown from './MobileMenuDropdown';

const MobileMenuItems = ({items, depthLevel}) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

//   useEffect(()=>{
//     const handler = (e) => {
//       if (dropdown && ref.current && !ref.current.contains(e.target)){
//         setDropdown(false);

//       }
//     };

//     document.addEventListener("mousedown", handler);
//     document.addEventListener("touchstart", handler);
//     return() => {
//       document.removeEventListener("mousedown", handler);
//       document.removeEventListener("touchstart", handler);
//     };
//   }, [dropdown]);


  const onMouseEnter = () =>{
    window.innerWidth > 960 && setDropdown(true);
    
  }

  const onMouseLeave = () =>{
    window.innerWidth > 960 && setDropdown(false);

  }
  return (
//     <li >
//     <a href={`${items.href}`} className=" w-full block h-full py-3">{items.title}</a>
//   </li>

    <li className="text-gray-500  text-sm border-b hover:bg-gray-200" key={items.title} ref={ref}>
        {items.submenu ? (
            items.href ? (
                <div className="relative ">
                    <div className={`relative flex items-center justify-between w-full h-full link-mobile-menu ${dropdown ? "show active" : ""}`}>
                        <a href={`${items.href}`} className={` block w-full h-full relative px-2 py-3 ${dropdown ? "show active" : ""}`} aria-expanded={dropdown ? "true" : "false"} onClick={()=>setDropdown((prev) => !prev)}>
                            {items.title}{" "}

                        </a>
                        {depthLevel > 0 ? <span>&raquo;</span>:  <span className={`p-2 mx-2 bg-gray-800 flex items-center justify-center cursor-pointer h-full ${dropdown ? "show active" : ""}`} aria-expanded={dropdown ? "true" : "false"} onClick={()=>setDropdown((prev) => !prev)}><i className={`fa fa-angle-down dropdown-angle-icon text-[9px]   text-white `} ></i></span>}
                    </div>
                
                    <MobileMenuDropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
                </div>
            ) : (
                <div className="relative ">
                    <button className={` px-2 py-3 flex items-center justify-between w-full ${dropdown ? "show active" : ""}`} aria-expanded={dropdown ? "true" : "false"} onClick={()=>setDropdown((prev) => !prev)}>
                        {items.title}{" "}

                        {depthLevel > 0 ? <span>&raquo;</span>:  <i className="fa fa-angle-down dropdown-angle-icon text-[9px] ml-2"></i>}
                    </button>
                
                    <MobileMenuDropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
                </div>
            )
            ):(
               <Link to={`${items.href}`} className=" w-full block h-full py-3 px-2">{items.title}</Link> 
            )
        }
                                    
                                </li>
  )
}

export default MobileMenuItems