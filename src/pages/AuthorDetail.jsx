import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr'
import { BestSellingBooks } from '../components/data'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import { slugify } from '../components/slugify'

const AuthorDetail = ({demo}) => {

    const author = 
        {
            id: 3,
            image: '/users/300_25.jpg',
            name: 'Travis Carter',
            books_published: 2000,
    
        }
    
  return (
    <>
    <NavBar/>
        <div>
            <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                <div className="container py-7">
                    <h3 className=" mb-5 text-[33px]">Author's Information</h3>

                    <div>
                        <ol className="breadcrumb mb-0 inline-flex gap-4 text-sm text-gray-500">
                            <li className="breadcrumb-item"><a href="">Home</a></li>
                            <li className="breadcrumb-item"><a href="">Library</a></li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="top-footer lg:flex py-[80px] ">
                    <aside className=" categories-sidemenu w-full lg:w-1/3 bg-fuchsia-100 w-full overflow-auto h-[100%] bg-[#f8f8f8]">
                    <div className="">
                        <nav>
                            <div className="categories-sidemenu-search border-b">
                                <img src={`${author.image}`} className="w-full h-full"/>
                            </div>
                            

                            
                        </nav>


            

                    </div>
                </aside>

                    <div className="mt-7 lg:mt-0 lg:flex-1 pl-0 md:pl-7  ">

                        {/* <CategoryIndex /> */}
                        <div className="border-b flex items-center justify-between flex-row pb-4">
                            <div className="flex flex-col justify-start">
                                <h5 className="mb-2 text-sm text-gray-500">{author.books_published} books published</h5>
                                <h1 className="text-[30px]">{author.name}</h1>
                            </div>

                            <div className="inline-flex items-center justify-center gap-2 flex-wrap">
                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#3b5999] hover:text-white transition delay-100 ease-in-out duration-300"><GrFacebookOption/></a>
                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-[#55acee] hover:text-white transition delay-100 ease-in-out duration-300"><GrTwitter/></a>
                                <a href="" className="pop_author_social-icon h-8 w-8 rounded-full flex  items-center justify-center bg-gray-200 hover:text-white hover:bg-[#0077B5] transition delay-100 ease-in-out duration-300"><GrLinkedinOption/></a>
                            </div>
                        </div>

                        <div className="my-9">
                            <p className="text-justify mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, placeat nemo. Fuga dolore dolores, numquam voluptates, est blanditiis soluta nam saepe temporibus voluptate, magni voluptas vel deserunt sunt provident eveniet aut quae? Possimus similique dolor at, placeat est dolorum sit cupiditate, officiis quia ad sint minima earum! Repellendus, magnam eos!</p>

                            <p className="text-justify mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt nam facere excepturi delectus itaque, iusto iste, animi ipsum ducimus cupiditate. Ex voluptates, et cum facere, iusto eum sed similique voluptas cumque, nulla voluptatem mollitia consequatur nobis. Maxime nesciunt, ea temporibus, nisi exercitationem sapiente consequatur quisquam delectus neque laboriosam deserunt.</p>

                            <p className="text-justify mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt nam facere excepturi delectus itaque, iusto iste, animi ipsum ducimus cupiditate. Ex voluptates, et cum facere, iusto eum sed similique voluptas cumque, nulla voluptatem mollitia consequatur nobis. Maxime nesciunt, ea temporibus, nisi exercitationem sapiente consequatur quisquam delectus neque laboriosam deserunt.</p>
                        </div>

                        <div className="text-md border-b pb-4">
                                <h3 className="text-[22px]">Books of Author</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 py-7 scroll-container">
                            {BestSellingBooks.slice(0, 6).map((book, index)=>(
                                <div key={book.id} className="scroll-box">
                                    <a href={`/book/${book.id}/${slugify(book.title)}`} className="new-book-container">
                                                <div className="new-book">
                                                    <img src={`${book.image}`} alt="" className="w-full"/>
                                                </div>
                                            </a>

                                    <div className="flex md:block flex-col items-center justify-center">
                                        {/* <div> */}
                                        <h3 className="text-gray-700 uppercase "><a href={`/book/${book.id}/${slugify(book.title)}`} className="block hover:underline">{book.title}</a></h3>
                                        <span className="block mt-2 text-sm text-gray-600">By <a href="#" className="hover:underline">{book.author}</a></span>
                                        <a href="#" className="block mt-2 text-sm text-gray-600  hover:underline">Terms of order</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600  hover:underline">Terms of return</a>
                                    </div>
                                    {/* </div> */}
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

export default AuthorDetail