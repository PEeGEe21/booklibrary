import React, {useRef, useEffect, useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import './bannerOne.css'
import CountUp from 'react-countup';

import axios from 'axios';
import { allCategories } from '../../apiCalls';


const BannerOne = () => {
    
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState();
    

    useEffect(()=>{
        const getCategories = async ()=>{
            setIsLoading(false)
            try{
                
                const res = await axios.get( `${allCategories}`);
                    // const res = await axios.get( "http://localhost:8000/api/products/" );
                    // console.log(res.data)
                    setCategories(res.data.categories)
                // console.log(categories)
                
            }catch(err){}
            // setIsLoading(false);
            
        };
        
        getCategories()
    }, [categories])

  return (
    <>
        <section className="relative" style={{backgroundImage: 'url(/product7.jpg)', backgroundAttachment: 'scroll', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="overlay"></div>
            <div className="container z-10">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 text-white z-10 py-[80px] ">
                <div className="flex items-center justify-center flex-col md:flex-row z-10">
                            <div className="category-icon bg-[#77b748]">
                                <AiOutlineHeart />

                            </div>

                            <div className="flex flex-col pl-0 md:pl-3">
                                <a href=""><span className="category-title text-[#77b748]">Horror</span></a>
                                <span className="category-number">5930023</span>
                            </div>

                    </div>

                    <div className="flex items-center justify-center flex-col md:flex-row z-10 mb-4 md:mb-0">
                            <div className="category-icon bg-[#93648d] ">
                                <AiOutlineHeart />

                            </div>

                            <div className="flex flex-col pl-0 md:pl-3">
                                <a href=""><span className="category-title text-[#e590db]">Romance</span></a>
                                <span className="category-number">5930023</span>
                            </div>

                    </div>
                    {/* {categories.slice(0,4).map((cat, index)=>(
                    <div className="flex items-center justify-center flex-col md:flex-row z-10 mb-4 md:mb-0" key={cat._id}>
                            <div className="category-icon">
                                <AiOutlineHeart />

                            </div>

                            <div className="flex flex-col pl-3">
                                <a href=""><span className="category-title">{cat.name}</span></a>
                                
                                <span className="category-number">  </span>
                            </div>

                    </div>
                ))} */}
                
                {/* <CountUp start={0} end={5903} delay={3} duration={100}/> */}
                    <div className="flex items-center justify-center flex-col md:flex-row z-10">
                            <div className="category-icon bg-[#77b748]">
                                <AiOutlineHeart />

                            </div>

                            <div className="flex flex-col pl-0 md:pl-3">
                                <a href=""><span className="category-title text-[#77b748]">Comedy</span></a>
                                <span className="category-number">5930023</span>
                            </div>

                    </div>
                    <div className="flex items-center justify-center flex-col md:flex-row z-10">
                            <div className="category-icon bg-[#4cc3d9]">
                                <AiOutlineHeart />

                            </div>

                            <div className="flex flex-col pl-0 md:pl-3">
                                <a href=""><span className="category-title text-[#4cc3d9]">Science</span></a>
                                <span className="category-number">5930023</span>
                            </div>

                    </div>

                        
                </div>
            </div>
        </section>
    </>
  )
}

export default BannerOne