import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import './featured.css'

const Featured = () => {
    return (
        <>
            <section className="featured section-separator bg-gray-100">
                <div className="container">
                    <div className="flex items-center py-12">
                        <div className=" w-[40%] hidden md:block">
                                    <div className="featured-book-container -mt-[100px] -mb-[40px]">
                                        <div className="featured-book">
                                            <img src="/books/img-05.jpg" alt="" className="w-full"/>
                                        </div>
                                    </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full md:w-[60%] ">

                            <div  className="flex justify-start flex-col gap-4 relative">
                                <div className="saletagbox"><span className="saletag">Featured</span></div>

                                <div><h3 className="featured-title"><a href="">Home Economics</a></h3></div>
                                <span className="featured-author text-muted">By: <a href="" className="hover:text-blue-500 transition delay-100 ease-in-out duration-300 ">Udeh Praise</a></span>
                                <span>rating</span>
                            </div>
                            <div className="text-center flex flex-col ">
                                <span className="featured-price"><ins>$3456</ins> <del>$9505</del></span>
                                <button className=" w-full rounded-full h-12  text-black/70 mt-2 flex items-center justify-center transition delay-100 ease-in-out duration-300 border border-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-400"><BiCartAlt className="mr-2"/> Add to Cart</button>
                            </div>

                        </div>




                    </div>
                </div>
            
            </section>
        </>
    )
}

export default Featured