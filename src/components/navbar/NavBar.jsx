import React, {useState, useRef, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'
import { BsSearch, BsEnvelope } from 'react-icons/bs';
import { IoMdGlobe, IoMdHelpCircleOutline } from 'react-icons/io';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { BiCartAlt, BiTrash } from 'react-icons/bi';
import MenuItems from './MenuItems';
import {menuList} from '../menuList';
import { CartItems } from '../data';
import MobileMenuItems from './MobileMenuItems';

import Badge from '@mui/material/Badge';
import {ShoppingCartOutlined } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

// import * as React from 'react';
// import MailIcon from '@mui/icons-material/Mail';

// export default function SimpleBadge() {
//   return (
//     <Badge badgeContent={4} color="primary">
//       <MailIcon color="action" />
//     </Badge>
//   );
// }



const NavBar = () => {
const [currencydropdown, setCurrencyDropdown] = useState(false);
const [wishlistdropdown, setWishlistDropdown] = useState(false);
const [userMenuDropdown, setUserMenuDropdown] = useState(false);
const [cartdropdown, setCartDropdown] = useState(false);
const [mobileDropdown, setMobileDropdown] = useState(false);
const ref = useRef();
const userRef = useRef();
const cartref = useRef();
const user = 'Praise';
const depthLevel = 0;

const location = useLocation();
const locationName = location.pathname;
// console.log(locationName, "locationnnnn")

const cartQuantity = 2;
const wishListQuantity = 0;

useEffect(()=>{
  const handler = (e) => {
    if (currencydropdown && ref.current && !ref.current.contains(e.target)){
      setCurrencyDropdown(false);

    }


  };

  document.addEventListener("mousedown", handler);
  document.addEventListener("touchstart", handler);
  return() => {
    document.removeEventListener("mousedown", handler);
    document.removeEventListener("touchstart", handler);
  };
}, [currencydropdown]);

useEffect(()=>{
  const handler = (e) => {

    if (cartdropdown && cartref.current && !cartref.current.contains(e.target)){
      setCartDropdown(false);

    }
  };

  document.addEventListener("mousedown", handler);
  document.addEventListener("touchstart", handler);
  return() => {
    document.removeEventListener("mousedown", handler);
    document.removeEventListener("touchstart", handler);
  };
}, [cartdropdown]);


  const onCurrencyMouseEnter = () =>{
    window.innerWidth > 960 && setCurrencyDropdown(true);
    
  }

  const onCurrencyMouseLeave = () =>{
    window.innerWidth > 960 && setCurrencyDropdown(false);

  }

  const onCartMouseEnter = () =>{
    window.innerWidth > 960 && setCartDropdown(true);
    
  }

  const onCartMouseLeave = () =>{
    window.innerWidth > 960 && setCartDropdown(false);

  }


      


  const currencyDropdownItems = [
    {
      name: 'Euro',
    },
    {
      name: 'Naira',
    },
  ] 

  const userDropdown = [
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Settings'
    },
    {
      title: 'Sign Out'
    },
  ]



  return (
    <>
        <header>
                <div className=" border-b">
                    <div className="container flex items-center justify-between">

                        <div className="flex items-center justify-between gap-4 h-full relative">
                            <button className="flex items-center gap-1 text-sm text-gray-600 hidden md:flex">
                                <BsEnvelope/>
                                contact
                            </button>

                            <button className="flex items-center gap-1 text-sm text-gray-600 hidden md:flex">
                                <IoMdHelpCircleOutline/>
                                help
                            </button>

                          <div className="relative h-full">
                            <button className="flex items-center gap-1 relative z-10 p-2 mr-2 text-sm text-gray-600  border border-transparent rounded-md focus:outline-none hover:bg-gray-100 transition delay-100 ease-in-out duration-100 " onClick={()=>setCurrencyDropdown((prev) => !prev)} ref={ref}  >
                                <IoMdGlobe/>
                                currency <i className="fa fa-angle-down text-[9px] ml-2"></i>
                            </button>

                            <ul className={`currencydropdown shadow-md rounded-md ${currencydropdown ? "show" : ""}`} >
                                {currencyDropdownItems.map((submenu, index)=>(
                                    // <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
                                    <li key={index} className="menu-items text-gray-600" >
                                        <Link to="/#">{submenu.name}</Link>
                                    </li>
                                )
                                
                                )}
                            </ul>
                            </div>
                        </div>

                        <div className="h-full relative">
                            {user ? 
                            
                            <button type="button" className={`userdropbtn relative z-10 flex items-center p-2 px-4 text-sm text-gray-600  border border-transparent focus:outline-none hover:bg-gray-100 rounded-md ${userMenuDropdown ? "show" : ""}`} onClick={()=>setUserMenuDropdown((prev) => !prev)} >
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img src="/avatar-1.png" className="object-cover w-full h-full" alt="avatar"/>
                                        {/* <img src="" alt="" /> */}
                                    </div>

                                    <span className="mx-1">{user}</span>

                                    <i className="fa fa-angle-down text-[9px] ml-2"></i>

                            </button>
                            : 
                            <Link to="/login" className="relative z-10 flex items-center p-2 px-4 text-sm text-gray-600  border border-transparent  focus:outline-none bg-gray-100">

                                    <span className=" h-8 overflow-hidden flex items-center">Login / SignUp</span>

                            </Link>   

                            
                        }

                              {/* {user && */}
                            

                            <ul className={`userMenuDropdown shadow-md rounded-md ${userMenuDropdown ? "show" : ""}`}>
                                {userDropdown.map((submenu, index)=>(
                                  // <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
                                  <li key={index} className="menu-items text-gray-600" >
                                        <Link to={`${submenu.link ? `${submenu.link}` : "/#"}`}>{submenu.title}</Link>
                                    </li>
                                )
                                
                                )}
                            </ul>
                          {/* } */}
                            
                        </div>
                    </div>
                </div>
            
            <div className="py-5 md:py-7">
                <div className="container">
                {/* 
                 */}

                        <div className="flex items-center justify-between">
                            <div className="logo">
                              <a href="">
                                <img src="/logo.svg" alt=""/>
                                </a>
                            </div>

                            <div className="w-[50%] hidden md:block">
                                <form className="rounded-md flex items-center justify-center border border-gray-300 h-[50px]">
                                    <input type="search" placeholder="search author, title" className="text-sm h-full block w-full px-4 py-2 text-gray-700 bg-white border-0 border-gray-200 rounded-md dark:text-gray-300  focus:outline-none" />
                                    <button className="px-6 py-2 leading-5 text-md text-white transition-colors duration-200 transform  rounded-sm focus:outline-none  h-full border-0" type="submit"><BsSearch className="h-full text-gray-400"/></button>
                                </form>
                            </div>
                            
                            <div className="flex items-center justify-between gap-6">
                                <div className="relative">
                                  <button className="flex items-center gap-1" onClick={()=>setWishlistDropdown((prev) => !prev)} >
                                  <Badge badgeContent={wishListQuantity} color="secondary">
                                                  {/* <ShoppingCartOutlined/> */}
                                    <AiOutlineHeart className="text-2xl"/> 
                                                </Badge>
                                    <span className="text-sm hidden md:block">Wishlist</span>
                                  </button>

                                  <div className={`border-t-2 border-[#77b748] w-[330px] z-10 cartdropdown bg-white   p-[15px] mt-5 ${wishlistdropdown ? "show" : ""}`}   >
                                      <div className=" border-gray-300 pb-3 pt-2"  >
                                       

                                      {/* {CartItems === null ? <div className="mb-3 mt-2">
                                          <p className="text-gray-700 text-sm">No products were added to the wishlist!</p>
                                        </div>
                                        : */}
                                        <div className=" mt-2">
                                          <p className="text-gray-700 text-sm">No products were added to the wishlist!</p>
                                        </div>
                                        

                                          
                                        

                                        
                                      </div>

                                      

                                    </div>
                                </div>

                                <div className="relative border-l border-gray-300 pl-5">
                                    <button className="flex items-center gap-1" onClick={()=>setCartDropdown((prev) => !prev)}  ref={cartref}>
                                    {/* <GiShoppingCart/> */}
                                        <Badge badgeContent={cartQuantity} color="primary">
                                                  <ShoppingCartOutlined/>
                                                </Badge>
                                        

                                      {/* <AiOutlineShoppingCart className="text-2xl"/> */}
                                      <span className="text-sm hidden md:block">$576.09</span>
                                    </button>

                                    <div className={`border-t-2 border-rose-500 w-[330px] cartdropdown bg-white   p-[15px] mt-8 ${cartdropdown ? "show" : ""}`}  ref={cartref} >
                                      <div className="border-b border-gray-300 pb-3 pt-2"  >
                                       

                                      {/* {CartItems === null ? <div className="mb-3 mt-2">
                                          <p className="text-gray-700 text-sm">No products were added to the wishlist!</p>
                                        </div>
                                        : */}
                                        

                                          {CartItems.slice(0,3).map((item, index)=>(
                                            <div className="flex items-center justify-start relative cart-dropdown-item pb-6" key={item.id}>
                                                <a href="" className="mr-4 relative w-1/3 h-20">
                                                  <div className="w-full h-full flex items-center justify-center overflow-hidden cart-item-image">
                                                      <img src={`${item.image}`} className="w-full h-full relative "/>
                                                      
                                                  </div>
                                                </a>
                                              <div className="flex flex-col gap-2 cart-item-data overflow-hidden">
                                                <h5 className=""><a href="">{item.title}</a></h5>
                                                <h6>$<span>{item.price}</span></h6>

                                              </div>


                                            </div>
                                          ))}
                                        

                                        
                                      </div>

                                      <div className="cart-footer">
                                        <div className="flex items-center justify-between pt-6">
                                          <button className="flex items-center justify-start text-sm text-gray-500 hover:text-rose-400 transition ease-in-out duration-300">
                                            <BiTrash/>
                                            <span className="ml-2 ">Clear Your Cart</span>

                                          </button>
                                          <div className="price-total text-sm text-gray-500">
                                            Subtotal: <span className="font-bold text-[16px] text-gray-900">$8050.930</span>
                                          </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-8 pb-2 gap-8">
                                                <a href="/cart" className="bg-[#77b748] text-sm text-white rounded-md p-3 px-4 w-1/2 h-10 flex items-center justify-center">View Cart</a>
                                                <a href="" className="p-3 px-4 text-sm text-gray-600 h-10 w-1/2 rounded-md border border-gray-300 mr-4 flex items-center justify-center focus:outline-none ">Checkout</a>
                                            </div>
                                        </div>

                                    </div>


                                    {/* <BiCartAlt/> */}
                                </div>
                            </div>

                        </div>

                        <div className="w-full block md:hidden mt-6">
                                <form className="rounded-md flex items-center justify-center border border-gray-300 h-[50px]">
                                    <input type="search
                                    " placeholder="search author, title" className="text-sm h-full block w-full px-4 py-2 text-gray-700 bg-white border-0 border-gray-200 rounded-md  focus:outline-none" />
                                    <button className="px-6 py-2 leading-5 text-md text-white transition-colors duration-200 transform  rounded-sm focus:outline-none  h-full border-0" type="submit"><BsSearch className="h-full text-gray-400"/></button>
                                </form>
                            </div>
                </div>
                </div>
            <div className="bg-[#77b748] navigation-area relative">
                <div className="container">
                    <nav className="flex items-center justify-start hidden md:block">
                        <ul className="flex flex-wrap">
                            {menuList.map((items, index)=>(
                                // const depthLevel = 0;
                                <MenuItems items={items} key={index} locationName={locationName}/>
                            ))}

                        </ul>
                        
                    </nav>
                    </div>
                    <div className="flex md:hidden relative">
                      <div className="container">
                        <button type="button" className={`text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 my-4 bg-white border-gray-300 text-lg px-1 rounded-md mobile-menu-btn ${mobileDropdown ? "open" : ""}`} aria-label="toggle menu" onClick={()=>setMobileDropdown((prev) => !prev)} >
                              {/* <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                              </svg> */}
                              <div className="bar-one"></div>
                              <div className="bar-two"></div>
                              <div className="bar-three"></div>
                          </button>
                      </div>

                      


                          <div className={` mobileDropdown absolute top-full z-10 w-full shadow-xl ${mobileDropdown ? "active" : ""}`}>
                            <div className="container relative ">

                              <nav>

                              <ul className=" bg-white">
                                  {menuList.map((items, index)=>(
                                      // const depthLevel = 0;
                                      <MobileMenuItems items={items} key={index} depthLevel={depthLevel}/>
                                     
                                  ))}

                              </ul>
                              </nav>
                            </div>
                          </div>
                      </div>

                

            </div>
        </header>
    </>
  )
}

export default NavBar