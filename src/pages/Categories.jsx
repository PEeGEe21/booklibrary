import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CategoryItems } from '../components/data'
import { Outlet } from 'react-router-dom'
import '../components/allCategories/allCategories.css'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Redirect,
  } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import { BsSearch } from 'react-icons/bs'
import CategoryIndex from '../components/allCategories/CategoryIndex'

const Categories = ({Children}) => {

const location = useLocation();
const locationName = location.pathname;

  return (

    <>
        <NavBar/>
            <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                <div className="container py-7">
                    <h3 className=" mb-5 text-[33px]">Categories</h3>

                    <div>
                        <ol className="breadcrumb mb-0 inline-flex gap-4 text-sm text-gray-500">
                            <li className="breadcrumb-item"><a href="">Home</a></li>
                            <li className="breadcrumb-item"><a href="">Library</a></li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="container pt-[10px] pb-[30px] md:py-[60px]">

                <div className="lg:flex py-12 ">
                    <div className="block lg:hidden">
                        <button className="px-4 bg-gray-400 h-10 flex items-center justify-center text-white shadow-md"><span className="mr-2">Menu</span> 

                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                              </svg>

                        </button>   
                    </div>
                    <aside className=" categories-sidemenu w-full lg:w-1/4 bg-fuchsia-100 w-full overflow-auto h-[100%] hidden lg:block bg-[#f8f8f8]">
                        <div className="">
                            <nav>
                                <div className="categories-sidemenu-search border-b">
                                <form className="rounded-md flex items-center justify-center border border-gray-300 h-[50px]">
                                            <input type="text" placeholder="search author, title, category" className="text-sm h-full block w-full px-4 py-2 text-gray-700 bg-white border-0 border-gray-200 rounded-md dark:text-gray-300  focus:outline-none" />
                                            <button className="px-4 py-2 leading-5 bg-white text-md text-white transition-colors duration-200 transform  rounded-md focus:outline-none  h-full border-0" type="submit"><BsSearch className="h-full text-gray-400"/></button>
                                        </form>
                                </div>

                                <ul>
                                    {CategoryItems.map((item, index)=>(
                                        <li key={index}>
                                            <Link to={item.id} className="flex items-center justify-between hover:bg-gray-100 text-gray-600 transition ease-in-out duration-300">{item.name}

                                            <i className="fa fa-angle-right dropdown-angle-icon text-[9px] ml-2"></i>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>


                

                        </div>
                    </aside>

                    <div className="mt-7 lg:mt-0 lg:flex-1 pl-0 lg:pl-7 ">

                        {(locationName === '/categories' || locationName === '/categories/') &&

                            <CategoryIndex />
                        }

                        <Outlet/>
                    </div>
                </div>
                
            </div>

        <Footer/>
    </>
  )
}

export default Categories