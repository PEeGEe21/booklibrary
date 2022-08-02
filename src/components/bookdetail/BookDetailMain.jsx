import React, {useState} from 'react'
import { FaStore, FaStoreAlt } from 'react-icons/fa';
import { IoMdAdd, IoMdAppstore, IoMdRemove, IoMdRocket } from 'react-icons/io';

const BookDetailMain = ({book}) => {
    const [cartBtn, setCartBtn] = useState(false);
    const [wishlistBtn, setWishListBtn ] = useState(false);
    const [minusBtn, setMinusBtn ] = useState(false);
    const [addBtn, setAddBtn ] = useState(false);
    const [count, setCount ] = useState(1);

    const handleQuantity = (type) =>{
        if(type === "dec"){
        //   quantity>1 && setQuantity(quantity - 1)
            count > 1 && setCount(count - 1)
            setMinusBtn(true)
        }else{
            setAddBtn(true)
            setCount(count + 1)
        }
    }

    const handleCartClick =() =>{
    
        setCartBtn(true)

    }
    const handleWishListClick =() =>{
    
        setWishListBtn(true)

    }

    return (

    
    <>
    
    <div className="w-full md:w-2/4  h-full">
        <div>

            <div className="h-42">
                <img src={`${book.bookcover}`} alt="" className="w-full h-full object-cover"/>
            </div>

            <div className="py-4">
                <div className="flex gap-3 items-center mb-4">
                    <ins  className="text-[30px]" style={{textDecoration: 'none'}}>$<span>{book.price}</span></ins>
                    <del className="text-[22px]">$<span>{book.oldprice}</span></del>
                </div>

                <ul>
                    <li className="flex gap-2 items-center mb-4">
                        <span className="p-4 border rounded-full"><IoMdRocket/></span>
                        <span className="ml-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, commeenre iek woec.</span>
                    </li>
                    <li className="flex gap-2 items-center mb-4">
                        <span className="p-4 border rounded-full"><IoMdRocket/></span>
                        <span className="ml-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, commeenre iek woec.</span>
                    </li>
                    <li className="flex gap-2 items-center mb-4">
                        <span className="p-4 border rounded-full"><FaStoreAlt/></span>
                        <span className="ml-2 text-gray-600 text-sm">Status: <span style={{color: 'red'}}>{book.status}</span></span>
                    </li>
                </ul>

                <div className="px-2">
                    <div className="w-full flex justify-evenly  py-4 h-16">
                        <button className={`w-1/5 bg-transparent border border-gray-400 text-[18px] h-full rounded-md  py-5 flex items-center justify-center btn-Animated minusBtn transition-200 duration-300 ease-in-out ${minusBtn ? "clicked shadow-md " : ""}`}  onClick={()=>handleQuantity("dec")} onAnimationEnd={() => setMinusBtn(false)} ><IoMdRemove/></button>

                            <input type="text" className="w-1/2 focus:outline-none border border-gray-400  py-5 text-center rounded-md text-gray-900 " value={count} readOnly/>

                        <button className={`w-1/5 bg-transparent border border-gray-400 text-[18px] py-5 rounded-md flex items-center justify-center btn-Animated addBtn transition-200 duration-300 ease-in-out ${addBtn ? "clicked shadow-md " : ""}`}  onClick={()=>handleQuantity("inc")} onAnimationEnd={() => setAddBtn(false)}><IoMdAdd/></button>
                    </div>

                    <div className="py-4">
                        <button className={`w-full h-12 py-3 bg-gray-400 text-white mb-4 flex items-center justify-center rounded-md text-sm btn-Animated add_to_cart relative ${cartBtn ? "clicked " : ""} `} onClick={handleCartClick} onAnimationEnd={() => setCartBtn(false)} >Add to Cart</button>

                        <button className={`w-full h-12 py-3 bg-gray-400 text-white flex items-center justify-center rounded-md text-sm btn-Animated add_to_wishlist relative ${wishlistBtn ? "clicked " : ""} `} onClick={handleWishListClick} onAnimationEnd={() => setWishListBtn(false)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>

            


        </div>

    
    </div>
    
    </>
  )
}

export default BookDetailMain