import React from 'react'

import { BiCartAlt } from 'react-icons/bi'
import { FaSearchPlus} from 'react-icons/fa'
import { AuthorsPickBooks } from '../data'
import './authorspick.css';


const AuthorsPick = () => {
  return (
        <>
            <section className="sectionspace">
                <div className="container">
                <div className="border-b flex items-center justify-between flex-row pb-6">
                    <div className="flex flex-col justify-start">
                        <h5 className="mb-2 text-sm">Get our best selling</h5>
                        <h1 className="text-2xl">Picked By Authors</h1>
                    </div>

                    <div>
                        <a href="" className="rounded-full border p-3 px-5 text-sm w-full text-black">View All</a>
                    </div>
                </div>
                

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                              



                            {AuthorsPickBooks.sort(()=>Math.round(Math.random() * 1000)).slice(0, 4).map((book, index)=>(
                                             <div className=" authors-pick-book rounded-md overflow-hidden hover:shadow-lg transition duration-300 ease border  " key={book.id}>
                                                <a href="" className="authors-pick-book-container rounded-t relative">
                                                    {/* <div className="auth-pick-book"> */}
                                                        <img src={`${book.image}`} alt="" className="w-full h-full "/>
                                                    {/* </div> */}
                                                    <div className="tg-hovercontent">
                                                      {/* <div className="hover-details"> */}
                                                      {/* <div className="tg-description">
                                                        <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua enim adia minim veniam, quis nostrud.</p>
                                                      </div> */}
                                                      <span className="mf-portfolio-icon"><FaSearchPlus/></span>

                                                      {/* <span class="tg-bookpage">Book Pages: 206</span>
                                                      <span class="tg-bookcategory">Category: Adventure, Fun</span>
                                                      <span class="tg-bookprice">Price: $23.18</span>
                                                      <div class="tg-ratingbox"><span class="tg-stars"><span></span></span></div> */}
                                                      {/* </div> */}
                                                    </div>
                                                </a>
                                                {/* <div className="px-5 py-1 flex flex-row gap-2 flex-wrap border-b">
                                                    
                                                    <span className="cat py-1 text-xs font-semibold text-gray-700 mr-1">Fun</span>
    
                                                    <span className="py-1 text-xs font-semibold text-gray-700 mr-1">Horror</span>
                                                </div> */}
    
                                                <div className="py-4 mb-4 flex flex-col gap-2 px-5 text-center">
                                                    
                                              
    
                                                    <a href="">
                                                    <span className="book-title text-gray-900 text-lg mb-2">{book.title}</span></a>
    
                                                    <span className="text-gray-700 leading-none text-sm mb-2 ">By: Udeh Praise</span>
                                                    <span className="text-gray-700 leading-none text-sm mb-2 ">rating</span>

                                                    <button className=" w-full rounded-full h-12  text-black/70 mt-2 flex items-center justify-center transition delay-100 ease-in-out duration-300 border border-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 text-sm"><BiCartAlt className="mr-2"/> Add to Cart</button>
                                                </div>
                                            
                                        </div> 
                                        ))}
    
                                        
                            </div>
                        </div>
                   
                </div>
            </section>
        </>
      )
   
}

export default AuthorsPick