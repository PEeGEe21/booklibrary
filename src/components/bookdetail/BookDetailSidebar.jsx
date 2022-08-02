import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BestSellingBooks, CategoryItems, PopAuthors } from '../data'
import './bookdetail.css'
import { slugify } from '../slugify'

const BookDetailSidebar = () => {
  return (
    <>
    <aside className=" bookdetail-sidemenu w-full lg:w-1/4 w-full overflow-auto h-[100%] mt-7 lg:mt-0 ">
    <div className="">
            <div className="bookdetail-sidemenu-search mb-4">
            <form className="rounded-md flex items-center justify-center border border-gray-300 h-[50px]">
                        <input type="search" placeholder="search author, title, category" className="text-sm h-full block w-full px-4 py-2 text-gray-700 bg-white border-0 border-gray-200 rounded-md dark:text-gray-300  focus:outline-none" />
                        <button className="px-4 py-2 leading-5 bg-white text-md text-white transition-colors duration-200 transform  rounded-md focus:outline-none  h-full border-0" type="submit"><BsSearch className="h-full text-gray-400"/></button>
                    </form>
            </div>
        <nav className="mb-6">
            <div className="">
              <div className="bg-gray-900 text-white px-4 py-3 rounded-md">
                  <h3>Categories</h3>
              </div>

              <ul className="book-details-sidebarCat">
                  {CategoryItems.slice(0, 7).map((item, index)=>(
                      <li key={index}>
                          <Link to={`/categories/${item.id}/${item.name}`} className="flex items-center justify-between hover:bg-gray-100 text-gray-600 transition ease-in-out duration-300 ">{item.name}

                          <i className="fa fa-angle-right sidemenu-angle-icon text-[9px] ml-2"></i>
                          </Link>
                      </li>
                  ))}

                        <li>
                          <Link to="/categories" className="flex items-center justify-between hover:bg-gray-100 text-gray-600 transition ease-in-out duration-300">More...

                          <i className="fa fa-angle-right sidemenu-angle-icon text-[9px] ml-2"></i>
                          </Link>
                      </li>
              </ul>
            </div>

                </nav>


            <div className="mb-6">
              <div className="bg-gray-900 text-white px-4 py-3 rounded-md">
                  <h3>Trending Books</h3>
              </div>

              <ul>
                  {BestSellingBooks.slice(0, 4).map((item, index)=>(
                      <li key={index} className="inline-flex items-center">
                        <a href={`/book/${item.id}/${slugify(item.title)}`} className="w-28 h-28 trending-books">
                          <img src={`${item.image}`} className="w-full h-full object-cover" alt=""/>
                        </a>
                        <div>
                          <h3 className="w-full">
                            <a href={`/book/${item.id}/${slugify(item.title)}`} className=" transition ease-in-out duration-300 overflow-hidden trending-book-link ">{item.title}
                            </a>
                          </h3>

                          <h4 className="grid">
                            <span className="text-sm  text-gray-600">By <a href="" className="hover:underline">{item.author}</a></span>
                            <span>$<span>{item.price}</span></span>
                          </h4>
                        </div>
                      </li>
                  ))}
              </ul>
            </div>


            <div>
              <div className="bg-gray-900 text-white px-4 py-3 rounded-md">
                  <h3>Popular Authors</h3>
              </div>

              <ul>
                  {PopAuthors.slice(0, 4).map((author, index)=>(
                      <li key={index} className="inline-flex items-center">
                        <a href={`/author/${author.id}/${slugify(author.name)}`} className="w-28 h-28 trending-books">
                          <img src={`${author.image}`} className="w-full h-full object-cover" alt=""/>
                        </a>
                        <div>
                          <h3>
                            <a href={`/author/${author.id}/${slugify(author.name)}`} className=" transition ease-in-out duration-300">{author.name}
                            </a>
                          </h3>

                          <h4>
                            <span className="text-sm  text-gray-600">{author.books_published} books published
                            </span>
                          </h4>
                        </div>
                      </li>
                  ))}
              </ul>
            </div>




    </div>
</aside></>
  )
}

export default BookDetailSidebar