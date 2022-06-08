import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BestSellingBooks, CategoryItems, PopAuthors } from '../components/data'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import '../components/bookdetail/bookdetail.css'
import PopularAuthors from '../components/home/PopularAuthors'
import { slugify } from '../components/slugify'
import BookDetailSidebar from '../components/bookdetail/BookDetailSidebar'
import BookDetailMain from '../components/bookdetail/BookDetailMain'
import BookDescription from '../components/bookdetail/BookDescription'
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr'

const BookDetail = () => {

const book = 
    {
      id: 1, image:"/books/img-01.jpg", title:"Social Flat design", price:43.02, deleted_price:50.30, onsale: true, category: 'horror', status: 'in stock', author_image:'/users/300_7.jpg',  author: {
        id: 1,
        image: '/users/300_7.jpg',
        name: 'Udeh Praise',
      }
    }

  

  return (
    <>
        <NavBar/>
            <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                <div className="container py-7">
                    <h3 className=" mb-5 text-[33px]">Book Detail</h3>

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

                <div className="flex py-12 flex-col-reverse lg:flex-row ">
                    
                    <BookDetailSidebar/>
                  
                    <div className="mt-7 lg:mt-0 lg:flex-1 pl-0 lg:pl-7 ">

                        <div className="flex gap-4 flex-col md:flex-row">

                          <BookDetailMain book={book}/>

                          <BookDescription book={book}/>

                        </div>

                        <div className="mt-9 ">
                        <div>
                          <h3 className="text-[22px] mb-6 pb-3 border-b">Book Description</h3>
                        </div>
                          {/* <div className="p-4"> */}
                            <div className="">
                              <ul className="inline-flex">
                                <li className="  text-gray-900 relative book-det-decription w-2/3 mr-2 ">
                                  <div className="line"></div>
                                  <a href="" className="block px-4  h-10 border  border-t border-r border-b-[#fff] hover:border-b-[#fff] flex items-center justify-center">Description</a>
                                </li>
                                <li className=" text-gray-900  bg-white h-10 relative book-det-decription w-2/2 ">
                                  <div className="line"></div>

                                  <a href="" className="px-4 block h-10 border  border-t border-r border-b-[#dbdbdb] hover:border-b-[#fff] flex items-center justify-center">Review</a>
                                </li>
                              </ul>
                            </div>

                            <div className="p-8 pt-5 border border-[#dbdbdb] -mt-[1px]">
                              <p className="text-justify leading-7 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel impedit culpa nulla neque sunt alias repellendus, odio totam quia ad nisi nesciunt minus in vero iure voluptatibus ab molestias consequuntur vitae maxime libero commodi. Dolore esse eius culpa deserunt saepe numquam, facilis minima maiores? Sit voluptates sed consequatur ullam non?</p><br/>

                              <p className="text-justify leading-7 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel impedit culpa nulla neque sunt alias repellendus, odio totam quia ad nisi nesciunt minus in vero iure voluptatibus ab molestias consequuntur vitae maxime libero commodi. Dolore esse eius culpa deserunt saepe numquam, facilis minima maiores? Sit voluptates sed consequatur ullam non?</p>
                            </div>
                          {/* </div> */}

                        </div>
                        
                        <div className="mt-9">
                          <div>

                            <h3 className="text-[22px] mb-5 pb-2 border-b">About Author</h3>
                          </div>


                            <div className="flex bg-[#f7f7f7] px-4 py-7 md:flex-row flex-col ">
                              <div className="w-2/4">
                                <div className="h-22 w-24">
                                  <img src={`${book.author.image}`} className="w-full h-full object-cover rounded-full" alt=""/>
                                </div>

                              </div>

                              <div className="md:ml-2 mt-6 md:mt-0">
                                <div className="flex items-center justify-between mb-4">
                                  <div>
                                    <h3 className="text-[22px] mb-3">{book.author.name}</h3>
                                    <h5>lorem ipsum</h5>
                                  </div>

                                  <div className="inline-flex items-center justify-center gap-2 flex-wrap">
                                      <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center  bg-[#3b5999] text-white transition delay-100 ease-in-out duration-300"><GrFacebookOption/></a>
                                      <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center  bg-[#55acee] text-white transition delay-100 ease-in-out duration-300"><GrTwitter/></a>
                                      <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex  items-center justify-center text-white bg-[#0077B5] transition delay-100 ease-in-out duration-300"><GrLinkedinOption/></a>
                                  </div>
                                </div>

                                <div>
                                  <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi facere vel eos? Pariatur, sequi. Ratione tempora quasi nostrum commodi ut sed perspiciatis delectus. Commodi eos officiis voluptatem voluptas, voluptatum quos tenetur cumque animi recusandae nam rem ea, ipsum aliquam. Dolore amet tenetur porro obcaecati soluta fugiat aspernatur nulla dicta!</p>
                                </div>

                                <a href={`/author/${book.author.id}/${slugify(book.author.name)}`} className={` w-2/4 md:w-1/4  h-10 py-3 bg-green-600 hover:bg-green-400 transition duration-300 ease-in-out hover:text-gray-800 text-white mt-4 flex items-center justify-center rounded-md text-sm relative view-author-btn`} >View Author</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        <Footer/>
    </>
  )
}

export default BookDetail