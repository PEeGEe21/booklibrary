import React from 'react'
import { AiFillFacebook, AiOutlineFacebook } from 'react-icons/ai';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import './popularauthors.css'
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


const PopularAuthors = () => {
  return (
    <>
        <section className="sectionspace">
            <div className="container">
                <div className="border-b flex items-center justify-between flex-row pb-6">
                    <div className="flex flex-col justify-start">
                        <h5 className="mb-2 text-sm">See our Authors</h5>
                        <h1 className="text-2xl">Our Popular Authors</h1>
                    </div>

                    <div>
                        <a href="" className="rounded-full border p-3 px-5 text-sm w-full text-black">View All</a>
                    </div>
                </div>

                <div>
                    <div className="mt-3 lg:mt-6 py-5 lg:flex-1 ">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                            {PopAuthors.map((author, index)=>(
                                <div className="popular-authors relative rounded overflow-hidden  " key={author.id}>
                                {/* <div> */}
                                    {/* <span className="absolute right-0">Add to wishlist</span> */}
                                {/* </div> */}
                            {/* <button className="wish-button"><AiOutlineHeart className="w-full h-full"/></button> */}
                                    <a href="" className="pop_author-image-container">
                                        <div className="pop_author">
                                            <img src={`${author.image}`} alt="" className="w-full"/>
                                        </div>
                                    </a>
                                    

                                    <div className="px-2 py-4 flex flex-col gap-2 text-center mt-2">

                                        <a href="">
                                            <span className="book-title text-gray-900 text-lg mb-2">{author.name}</span>
                                        </a>

                                        <span className="text-gray-700 leading-none text-sm mb-2 ">{author.books_published} books published</span>

                                        <div className="inline-flex items-center justify-center gap-4">
                                            <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#3b5999] hover:text-white transition delay-100 ease-in-out duration-300"><GrFacebookOption/></a>
                                            <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#55acee] hover:text-white transition delay-100 ease-in-out duration-300"><GrTwitter/></a>
                                            <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex  items-center justify-center bg-gray-200 hover:text-white hover:bg-[#0077B5] transition delay-100 ease-in-out duration-300"><GrLinkedinOption/></a>
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

export default PopularAuthors

