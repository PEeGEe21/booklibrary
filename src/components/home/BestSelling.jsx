import React, { useEffect, useState } from 'react'
import { BiCartAlt } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { BestSellingBooks } from '../data';
import './bestselling.css'
import LikeButton from '../likebutton/LikeButton';
import { slugify } from '../slugify';
import axios from 'axios';
import {bestSellingBooks} from '../../apiCalls'
import Rating from '../Rating';


const BestSelling = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState();

    useEffect(()=>{
        const getBooks = async ()=>{
            setIsLoading(false)
            try{
                
                const res = await axios.get( `${bestSellingBooks}`);
                    // const res = await axios.get( "http://localhost:8000/api/products/" );
                    
                    setBooks(res.data.books)
                // console.log(books)
                
            }catch(err){}
            // setIsLoading(false);
            
        };
        
        getBooks()
    }, [books])

    const numberofStars = () =>{
        const stars = 2;

        for(let i = 0; i < stars ; i++){
            stars++;
        }
        console.log(numberofStars)
        return numberofStars;

    }


    



    


  return (
    <>
        <section className="sectionspace">
            <div className="container">
                <div className="border-b flex items-center justify-between flex-row flex-wrap pb-6">
                    <div className="flex flex-col justify-start">
                        <h5 className="mb-2 text-sm">Get our best selling</h5>
                        <h1 className="text-2xl">Our Best Sellling Books</h1>
                    </div>

                    <div className="mt-5 lg:mt-0">
                        <a href="/best-selling" className="rounded-full border p-3 px-5 text-sm w-full text-black">View All</a>
                    </div>
                </div>

                <div>
                    <div className="mt-6 lg:mt-6 py-5 lg:flex-1 ">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

                            {books.slice(0,4).map((book, index)=>(
                                <div className=" bestselling_home singlebook relative rounded overflow-hidden border-r border-t border-b border-l border-gray-300 " key={book._id}>
                                {/* <div> */}
                                    {/* <span className="absolute right-0">Add to wishlist</span> */}
                                    <LikeButton />
                                {/* </div> */}
                            {/* <button className="wish-button"><AiOutlineHeart className="w-full h-full"/></button> */}
                                    <a href={`/book/${book._id}/${slugify(book.title)}`} className="book-container">
                                        <div className="book" >
                                            <img src={`${book.isbookcoverset === false ? "/books/img-04.jpg" : `${book.bookcover}`}`} alt="" className="w-full"/>
                                        </div>
                                    </a>
                                    <div className="px-2 py-1 flex flex-row gap-2 flex-wrap border-b">
                                        
                                    {book.category.map((cat, index)=>(
                                            <a href={`/categories/${cat._id}/${slugify(cat.name)}`} key={cat._id}>

                                        <span className={`${book.category >= 2 ? "" : "cat"} py-1 text-xs font-semibold text-gray-700 mr-1`} key={cat._id} id={cat._id}>{cat.name}</span>
                                        </a>
                                    ))}
                                    </div>

                                    <div className="px-2 py-5 flex flex-col gap-2">
                                        
                                        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span>

                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span> */}
                                        {/* <div className="saletagbox">
                                            {book.onsale && 
                                            
                                                <span className="saletag">sale</span>
                                                }
                                        </div> */}

                                            <a href={`/book/${book._id}/${slugify(book.title)}`}>
                                                <span className="book-title text-gray-900 text-[22px] mb-2">{book.title}</span>
                                            </a>

                                            <a href={`/author/${book.author._id}/${slugify(book.author.name)}`}>
                                            <span className="text-gray-700 leading-none text-sm mb-2 "> By: {book.author.name}</span></a>
                                            
                                            <span className="price">{book.price} <del className="text-sm">$4443</del></span>
                                            <span className="text-gray-700 leading-none text-sm mb-2 ">

                                                        <Rating value={1}></Rating>
                                                    </span>
                                        <div className="flex items-center justify-start ">

                                    <a href={`/book/${book._id}/${slugify(book.title)}`} className="w-[150px] flex items-center texxt-center justify-center px-3 py-3 text-xl bg-[#47ab3c] ease-in-out duration-300 text-white hover:text-[#47ab3c]/100 hover:bg-white border-[#77b748] border-[1px]"><span className="text-sm  ">Read More</span></a>
                                        </div>
                                    </div>

                                
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

export default BestSelling