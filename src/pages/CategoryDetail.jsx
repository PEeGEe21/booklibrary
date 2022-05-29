import React from 'react'
import { Link } from 'react-router-dom'
import { BestSellingBooks, CategoryItems } from '../components/data'
import { Outlet } from 'react-router-dom'


const CategoryDetail = ({children}) => {
    // const {category}
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
        <div>
            <div className="border-b flex items-center justify-between flex-row flex-wrap pb-3 mb-4">
                <div className="flex flex-col justify-start">
                    {/* <h5 className="mb-2 text-sm text-gray-600">Get our best selling</h5> */}
                    <h3 className="text-[22px]">Category Name</h3>
                </div>

                
            </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 py-7">

                {BestSellingBooks.map((book, index)=>(
                    <div key={book.id}>
                        <h3 className="text-gray-700 uppercase "><a href={`/book/${book.id}/${slugify(book.title)}`} className="block hover:underline">{book.title}</a></h3>
                        <span className="block mt-2 text-sm text-gray-600">By <a href="#" className="hover:underline">{book.author}</a></span>
                        <a href="#" className="block mt-2 text-sm text-gray-600  hover:underline">Terms of order</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600  hover:underline">Terms of return</a>
                    </div>
                ))}

                    

                    <div>
                        <h3 className="text-gray-700 uppercase ">Company</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">FaQs</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">How we works</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Videos</a>
                    </div>



                    <div>
                        <h3 className="text-gray-700 mb-5 uppercase ">Legal</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Terms of Service</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Privacy Policy</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Cookie Policy</a>
                    </div>



                    <div>
                        <h3 className="text-gray-700 mb-5 uppercase">Contact Us</h3>
                        <span className="block mt-2 text-sm text-gray-600 hover:underline">+1 526 654 8965</span>
                        <span className="block mt-2 text-sm text-gray-600  hover:underline">example@email.com</span>
                    </div>
                </div>
            <div>
            

            <Outlet/>

        </div>
    </>
  )
}

export default CategoryDetail