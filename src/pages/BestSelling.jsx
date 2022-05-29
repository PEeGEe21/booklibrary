import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { BestSellingBooks } from '../components/data'
import Footer from '../components/footer/Footer'
import LikeButton from '../components/likebutton/LikeButton'
import NavBar from '../components/navbar/NavBar'

const BestSelling = () => {
  return (
    <>
    <NavBar/>

        <div>
            <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                <div className="container py-7">
                    <h3 className=" mb-5 text-[33px]">Best Selling</h3>

                    <div>
                        <ol className="breadcrumb mb-0 inline-flex gap-4 text-sm text-gray-500">
                            <li className="breadcrumb-item"><a href="">Home</a></li>
                            <li className="breadcrumb-item"><a href="">Library</a></li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="container py-[80px]">
                <div className="border-b flex items-center justify-between flex-row flex-wrap pb-6">
                    <div className="flex flex-col justify-start">
                        <h5 className="mb-2 text-sm text-gray-600">Get our best selling</h5>
                        <h1 className="text-[30px]">Our Best Sellling Books</h1>
                    </div>

                    <div className="mt-5 lg:mt-0">
                        {/* <a href="" className="rounded-full border p-3 px-5 text-sm w-full text-black">View All</a> */}
                    </div>
                </div>

                <div>
                    <div className="mt-6 lg:mt-6 py-5 lg:flex-1 ">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

                            {BestSellingBooks.map((book, index)=>(
                                <div className=" singlebook relative rounded overflow-hidden border-r border-t border-b border-l border-gray-300 " key={book.id}>
                                {/* <div> */}
                                    {/* <span className="absolute right-0">Add to wishlist</span> */}
                                    <LikeButton />
                                {/* </div> */}
                            {/* <button className="wish-button"><AiOutlineHeart className="w-full h-full"/></button> */}
                                    <a href="" className="book-container">
                                        <div className="book">
                                            <img src={`${book.image}`} alt="" className="w-full"/>
                                        </div>
                                    </a>
                                    <div className="px-2 py-1 flex flex-row gap-2 flex-wrap border-b">
                                        
                                        <span className="cat py-1 text-xs font-semibold text-gray-700 mr-1">Fun</span>

                                        <span className="py-1 text-xs font-semibold text-gray-700 mr-1">Horror</span>
                                    </div>

                                    <div className="px-2 py-4 mb-4 flex flex-col gap-2">
                                        
                                        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span>

                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span> */}
                                        <div className="saletagbox">
                                            {book.onsale && 
                                            
                                                <span className="saletag">sale</span>
                                                }
                                        </div>

                                        <a href="">
                                        <span className="book-title text-gray-900 text-[22px] mb-2">{book.title}</span></a>

                                        <span className="text-gray-700 leading-none text-sm mb-2 "> By: Udeh Praise</span>
                                        <span className="price">$2444 <del className="text-sm">$4443</del></span>
                                    </div>

                                    <button className="flex items-center justify-center  px-3 py-3 text-xl w-full border-gray-200 border-t hover:bg-[#77b748] m-0 transition delay-100 ease-in-out duration-300 hover:text-white text-gray-600 "> <BiCartAlt/><span className="text-sm font-semibold">Add to Cart</span></button>
                                
                            </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default BestSelling