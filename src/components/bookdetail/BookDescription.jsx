import React from 'react'
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr'
import { slugify } from '../slugify'

const BookDescription = ({book}) => {
  return (
      <>
    <div className="w-full md:px-3">
        {/* <div> */}
            <div>
                <h3 className="border-b pb-3 text-[16px] mb-6"><a href={`/categories/${slugify(book.category)}`}>{book.category}</a></h3>

                <div className="info-header">
                    <div className="saletagbox">
                        {book.onsale && 
                    
                            <span className="saletag">sale</span>
                        }
                    </div>

                    <h1 className="text-[30px] py-2">{book.title}</h1>
                    <h4 className="pb-2">By: <span className="hover:underline"><a href="">{book.author.name}</a></span></h4>
                    <span className="pb-3">rating</span>


                </div>

                <div className="mb-5">
                    <div className="py-7">
                        <h5 className="mb-3 text-[18px]">Share:</h5>
                        <div className="inline-flex items-center justify-center gap-2 flex-wrap">
                            <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center  bg-[#3b5999] text-white transition delay-100 ease-in-out duration-300"><GrFacebookOption/></a>
                            <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center  bg-[#55acee] text-white transition delay-100 ease-in-out duration-300"><GrTwitter/></a>
                            <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex  items-center justify-center text-white bg-[#0077B5] transition delay-100 ease-in-out duration-300"><GrLinkedinOption/></a>
                        </div>
                    </div>
                    <div>

                        <p className="mb-3 text-justify text-sm leading-6 text-gray-600" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. In illum architecto atque optio magni eaque quaerat non, aliquam tempora itaque aliquid officiis odit dignissimos enim ut earum quis quibusdam officia incidunt nobis fugiat vitae? </p> 
                        
                        <p className=" text-justify text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati, deleniti autem aliquam reprehenderit esse nam tempora doloremque totam temporibus unde exercitationem! Laudantium ex in, at nam, commodi cumque possimus recusandae et itaque odio numquam a sapiente sequi assumenda adipisci quae tenetur cum quam qui! Possimus autem facere itaque architecto!</p>
                    </div>

                </div>
                <div>
                    <h3 className="text-[22px] pb-2 mb-3 border-b">Product Details </h3>
                    <ul className="book-detail-table">
                        <li>
                            <span>Format</span>
                            <span>Hardback</span>
                        </li>
                        <li>
                            <span>Pages</span>
                            <span>528 pages</span>
                        </li>
                        <li>
                            <span>Dimensions</span>
                            <span>153 x 234 x 43mm | 758g</span>
                        </li>
                        <li>
                            <span>Publication Date</span>
                            <span>June 27, 2017</span>
                        </li>
                        <li>
                            <span>Publisher</span>
                            <span>Sunshine Orlando</span>
                        </li>
                        <li>
                            <span>Language</span>
                            <span>English</span>
                        </li>
                        <li>
                            <span>Illustrations note</span>
                            <span>b&w images thru-out; 1 x 16pp colour plates</span>
                        </li>
                        <li>
                            <span>ISBN10</span>
                            <span>1234567890</span>
                        </li>
                        <li>
                            <span>ISBN13</span>
                            <span>1234567890000</span>
                        </li>
                        <li>
                            <span>Other Fomats</span>
                            <span>CD-Audio, Paperback, E-Book</span>
                        </li>
                    </ul>
                </div>


            </div>


            
        {/* </div> */}
    </div>
    </>
  )
}

export default BookDescription