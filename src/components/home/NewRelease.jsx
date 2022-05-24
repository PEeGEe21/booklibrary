import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { NewReleaseBooks } from '../data'
import LikeButton from '../likebutton/LikeButton'
import './newrelease.css';
const NewRelease = () => {
  return (
    <>
        <section className="sectionspace newRelease">
            <div className="container">
                <div className="lg:flex py-12">
                    <div className=" w-full lg:w-2/5 pr-6 pb-5">
                        <div className="flex items-center border-b pb-4 justify-between flex-row">
                                <div className="flex flex-col justify-start">
                                    <h5 className="mb-2 text-sm">Get our latest books</h5>
                                    <h1 className="text-2xl">Our Latest Release</h1>
                                </div>
                        </div>
                        <p className="w-full my-3 py-4 text-gray-500 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio incidunt ullam reprehenderit voluptatibus aspernatur sed. Alias consequatur in tempore nam temporibus fuga sunt, molestiae magni!</p>

                        <div className="flex items-center">
                            <button className="bg-gray-700 text-white p-3 mr-3">Read Now</button>
                            <button className="border border-gray-700 text-black p-3">Read Now</button>
                        </div>
                            
                        
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3">
                        
                        {NewReleaseBooks.sort(()=>Math.round(Math.random() * 1000)).slice(0, 3).map((book, index)=>(
                                        <div className=" new-singlebook relative rounded overflow-hidden  " key={book.id}>
                                        {/* <div> */}
                                            {/* <span className="absolute right-0">Add to wishlist</span> */}
                                            {/* <LikeButton /> */}
                                        {/* </div> */}
                                    {/* <button className="wish-button"><AiOutlineHeart className="w-full h-full"/></button> */}
                                            <a href="" className="new-book-container">
                                                <div className="new-book">
                                                    <img src={`${book.image}`} alt="" className="w-full"/>
                                                </div>
                                            </a>
                                            {/* <a href="" className="book-container">
                                                <div className="book">
                                                    <img src={`${book.image}`} alt="" className="w-full"/>
                                                </div>
                                            </a> */}
                                            <div className="px-2 py-1 flex flex-row gap-2 flex-wrap border-b">
                                                
                                                <span className="cat py-1 text-xs font-semibold text-gray-700 mr-1">Fun</span>

                                                <span className="py-1 text-xs font-semibold text-gray-700 mr-1">Horror</span>
                                            </div>

                                            <div className="px-2 py-4 mb-4 flex flex-col gap-2 text-left">
                                                
                                                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span>

                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span> */}
                                                {/* <div className="saletagbox"><span className="saletag">sale</span></div> */}

                                                <a href="">
                                                <span className="book-title text-gray-900 text-lg mb-2">{book.title}</span></a>

                                                <span className="text-gray-700 leading-none text-sm mb-2 "> By: Udeh Praise</span>
                                                {/* <span className="price">{book.price} <del className="text-sm">{book.deleted_price}</del></span> */}
                                            </div>

                                            {/* <button className="flex items-center justify-center  px-3 py-3 text-xl w-full border-gray-200 border-t hover:bg-[#77b748] m-0 transition delay-100 ease-in-out duration-300 hover:text-white text-gray-600 "> <BiCartAlt/><span className="text-sm font-semibold">Add to Cart</span></button> */}
                                        
                                    </div>
                                    ))}

                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NewRelease