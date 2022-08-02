import React, {useEffect, useState} from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import { BiCartAlt } from 'react-icons/bi'
import { AllBooks, BestSellingBooks } from '../components/data'
import LikeButton from '../components/likebutton/LikeButton'
import '../components/library/library.css'
import { slugify } from '../components/slugify'
// import axios from 'axios'
import {host, allBooks} from '../apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import {getBooks} from '../redux/apiCalls'
import {addProduct} from '../redux/cartRedux'


const Library = () => {


    const dispatch = useDispatch();
    const books = useSelector((state) => state.book.products)

    useEffect(()=>{
        getBooks(dispatch)
    }, [dispatch])


    const [addBtn, setAddBtn ] = useState(false);
    const [selectedBtn, setSelectedBtn] = useState();
    // const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState();
    

    // useEffect(()=>{
    //     const getBooks = async ()=>{
    //         setIsLoading(false)
    //         try{
                
    //             const res = await axios.get( `${allBooks}`);
                    
    //                 setBooks(res.data.books)
    //             console.log(books)
                
    //         }catch(err){}
            
    //     };
        
    //     getBooks()
    // }, [books])

    const handleAddClick = (book) =>{
        console.log(book)
        dispatch(
            addProduct({...book})
        )
        setSelectedBtn(book)
        // alert(id)



        // if(id === selectedBtn){
            setAddBtn(true)
        // }
        // if(type === "dec"){
        //     quantity>1 && setQuantity(quantity - 1)
        //   }else{
        //       setQuantity(quantity + 1)
        //   }

    }
  return (
    <>
        <NavBar/>
            <div>
                <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                    <div className="container py-7">
                        <h3 className=" mb-5 text-[33px]">Library</h3>

                        <div>
                            <ol className="breadcrumb mb-0 inline-flex gap-4 text-sm text-gray-500">
                                <li className="breadcrumb-item"><a href="">Home</a></li>
                                <li className="breadcrumb-item active"><a href="">Library</a></li>
                            </ol>
                        </div>
                    </div>
                </div> 

                <div className="container py-[80px]">
                    <div className="border-b flex items-center justify-between flex-row flex-wrap pb-6">
                        <div className="flex flex-col justify-start">
                            <h1 className="text-[30px]">Our Books</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur itaque velit sit, tenetur voluptatibus quo doloribus vel delectus! Accusamus at amet ipsa autem molestiae id dolorem unde reiciendis sed provident?

                            </p>
                        </div>

                    </div>

                    <div>
                        <div className="mt-6 lg:mt-6 py-5 lg:flex-1 ">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

                                {books.map((book, index)=>(
                                    <div className=" lib-singlebook relative rounded overflow-hidden  " key={book._id}>
                                    {/* <div> */}
                                        {/* <span className="absolute right-0">Add to wishlist</span> */}
                                        {/* <LikeButton /> */}
                                    {/* </div> */}
                                {/* <button className="wish-button"><AiOutlineHeart className="w-full h-full"/></button> */}
                                        <a href={`/book/${book._id}/${slugify(book.title)}`} className="lib-book-container">
                                            <div className="lib-book">
                                                {/* <img src={`${book.image}`} alt="" className="w-full"/> */}
                                                <img src={`${book.isbookcoverset === false ? "/books/img-04.jpg" : `${book.bookcover}`}`} alt="" className="w-full"/>
                                            </div>
                                        </a>
                                        <div className="px-2 py-1 flex flex-row gap-2 flex-wrap border-b">
                                        {book.category.map((cat, index)=>(

                                            <span className={`${book.category >= 2 ? "" : "cat"} py-1 text-xs font-semibold text-gray-700 mr-1`} key={cat._id} id={cat._id}>{cat.name}</span>
                                        ))}
                                            

                                            {/* <span className="py-1 text-xs font-semibold text-gray-700 mr-1">Horror</span> */}
                                        </div>

                                        <div className="px-2 py-4 mb-4 flex flex-col gap-2">
                                            
                                            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span>

                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Photography</span> */}
                                            
                                            

                                            <a href={`/book/${book._id}/${slugify(book.title)}`}>
                                            <span className="book-title text-gray-900 text-[22px] mb-2">{book.title}</span>
                                            </a>

                                            <p className="text-gray-700 leading-none text-sm mb-2 "> By: <a href={`/author/${book.author._id}/${slugify(book.author.name)}`} className="hover:underline">{book.author.name}</a></p>
                                            <p className="price flex items-center gap-2">
                                                <span>$<ins className="" style={{textDecoration: 'none'}}>{book.price}</ins></span>
                                                {book.oldprice &&
                                                <del className="text-sm">$<span>{book.oldprice}</span></del>
                                            }
                                                
                                                </p>
                                        </div>

                                    <div className="w-full flex items-center justify-between flex-wrap">

                                        <button className={`flex items-center justify-center px-3 py-3 text-xl w-2/4 border-gray-200 border hover:bg-[#77b748] m-0 hover:text-white hover:border-[#77b748] focus:outline-none focus-within:outline-none text-gray-600 addToCartBtn rounded focus-visible:outline-none ${book._id === selectedBtn ? "clicked shadow-lg  " : ""}`}  onClick={()=>handleAddClick(book)} onAnimationEnd={() => setSelectedBtn(false)}> <BiCartAlt/><span className="text-sm font-semibold" >Add to Cart</span></button>

                                        {/* <div className="saletagbox">
                                                {book.onsale && <span className="saletag">on sale!!</span>}
                                            </div> */}
                                    </div>
                                    
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

export default Library