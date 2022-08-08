import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router'
import { CategoryItems } from '../components/data'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import BannerTwo from '../components/home/BannerTwo'
import '../components/authors/authors.css'
import { AiFillFacebook, AiOutlineFacebook } from 'react-icons/ai';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';

import { useDispatch, useSelector } from 'react-redux';
import {getAuthors} from '../redux/apiCalls'

const Authors = () => {

    const dispatch = useDispatch();
    const authors = useSelector((state) => state.author.authors.authors)
    console.log(authors)

    useEffect(()=>{
        getAuthors(dispatch)
    }, [dispatch])


    const PopAuthors = [
        {
            id: 1,
            image: '/users/300_15.jpg',
            name: 'Chris Holland',
            books_published: 300,
        },
        {
            id: 2,
            image: '/users/300_17.jpg',
            name: 'Mary Smith',
            books_published: 30,
    
        },
        {
            id: 3,
            image: '/users/300_25.jpg',
            name: 'Travis Carter',
            books_published: 2000,
    
        },
        {
            id: 4,
            image: '/users/300_18.jpg',
            name: 'Song Yu Jin',
            books_published: 30,
    
        },
        {
            id: 5,
            image: '/users/300_7.jpg',
            name: 'Allyson Witherers',
            books_published: 30,
    
        },
        
    ];

    const slugify = (string) =>{
        return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
      }
    

  return (
    <>
        <NavBar/>

            <div>
            <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                <div className="container py-7">
                    <h3 className=" mb-5 text-[33px]">Authors</h3>

                    <div>
                        <ol className="breadcrumb mb-0 inline-flex gap-4 text-sm text-gray-500">
                            <li className="breadcrumb-item"><a href="/#">Home</a></li>
                            <li className="breadcrumb-item"><a href="/#">Library</a></li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </div>
                </div>
            </div>
                <div className="container py-[80px]">


                    <div className="border-b flex items-center justify-between flex-row pb-6">
                        <div className="flex flex-col justify-start">
                            <h5 className="mb-2 text-sm">See our Authors</h5>
                            <h1 className="text-2xl">Our Authors</h1>
                        </div>

                      
                    </div>

                    <div>
                        <div className="mt-3 lg:mt-6 py-5 lg:flex-1 ">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {
                                authors === undefined ? 
                                
                                
                                
                                <>

                                {PopAuthors.map((author, index)=>(
                                    <div className="popular-authors relative rounded overflow-hidden shadow-md " key={author.id}>
                                    {/* <div> */}
                                        {/* <span className="absolute right-0">Add to wishlist</span> */}
                                    {/* </div> */}
                                {/* <button className="wish-button"><AiOutlineHeart className="w-full h-full"/></button> */}
                                        <a href={`/author/${author.id}/${slugify(author.name)}`} className="">
                                            <div className="relative overflow-hidden all-authors">
                                                <img src={`${author.image}`} alt="" className="w-full"/>
                                            </div>
                                        </a>
                                        

                                        <div className="px-4 py-2 mb-4 md:py-4 flex flex-col gap-2 text-left mt-0 lg:mt-2">
    
                                            <a href={`/author/${author.id}/${slugify(author.name)}`}>
                                                <span className="book-title text-gray-900 text-lg mb-2">{author.name}</span>
                                            </a>

                                            <span className="text-gray-700 leading-none text-sm mb-2 ">{author.books_published} books published</span>

                                            <div className="mt-3">
                                                <a href={`/author/${author.id}/${slugify(author.name)}`} className="text-sm bg-blue-100/50 px-3 py-2 text-blue-500">view bio</a>
                                            </div>

                                            {/* <div className="inline-flex items-center justify-center gap-4 flex-wrap">
                                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#3b5999] hover:text-white transition delay-100 ease-in-out duration-300"><GrFacebookOption/></a>
                                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#55acee] hover:text-white transition delay-100 ease-in-out duration-300"><GrTwitter/></a>
                                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex  items-center justify-center bg-gray-200 hover:text-white hover:bg-[#0077B5] transition delay-100 ease-in-out duration-300"><GrLinkedinOption/></a>
                                            </div> */}
                                        </div>
                                </div>
                                ))}
                                    
                                
                                </> 
                                
                                : 
                                
                                
                                <>
                                    {authors.map((author, index)=>(
                                    <div className="popular-authors relative rounded overflow-hidden shadow-md " key={author._id}>
                                    {/* <div> */}
                                        {/* <span className="absolute right-0">Add to wishlist</span> */}
                                    {/* </div> */}
                                {/* <button className="wish-button"><AiOutlineHeart className="w-full h-full"/></button> */}
                                        <a href={`/author/${author._id}/${slugify(author.name)}`} className="">
                                            <div className="relative overflow-hidden all-authors">
                                                <img src={`${author.avatarImage}`} alt="" className="w-full"/>
                                            </div>
                                        </a>
                                        

                                        <div className="px-4 py-2 mb-4 md:py-4 flex flex-col gap-2 text-left mt-0 lg:mt-2">
    
                                            <a href={`/author/${author._id}/${slugify(author.name)}`}>
                                                <span className="book-title text-gray-900 text-lg mb-2">{author.name}</span>
                                            </a>

                                            <span className="text-gray-700 leading-none text-sm mb-2 "> books published</span>

                                            <div className="mt-3">
                                                <a href={`/author/${author._id}/${slugify(author.name)}`} className="text-sm bg-blue-100/50 px-3 py-2 text-blue-500">view bio</a>
                                            </div>

                                            {/* <div className="inline-flex items-center justify-center gap-4 flex-wrap">
                                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#3b5999] hover:text-white transition delay-100 ease-in-out duration-300"><GrFacebookOption/></a>
                                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#55acee] hover:text-white transition delay-100 ease-in-out duration-300"><GrTwitter/></a>
                                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex  items-center justify-center bg-gray-200 hover:text-white hover:bg-[#0077B5] transition delay-100 ease-in-out duration-300"><GrLinkedinOption/></a>
                                            </div> */}
                                        </div>
                                </div>
                                ))}
                                </>
                            }
                                


                                
                                
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        
        <BannerTwo/>

        <Footer/>
    </>
  )
}

export default Authors