import React from 'react'
import './bannerTwo.css'

const BannerTwo = () => {
  return (
    <>
        <section className="relative" style={{backgroundImage: 'url(/blog/hero2.jpg)', backgroundAttachment: 'scroll', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="banner-overlay"></div>
            <div className="container z-10">
                <div className="lg:flex items-center justify-between z-10 md:mb-0 z-10 py-[60px]">
                            <div className=" w-full max-w-xl z-10 ">
                                {/* <AiOutlineHeart /> justify-between flex-col md:flex-row*/}
                                <h4 className="text-[30px] mb-5 leading-7">Open Discount for all</h4>

                                <h5 className="leading-5 font-normal text-[17px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum minus molestias a ea pariatur magnam.</h5>

                            </div>

                            <div className="mt-6 lg:mt-0 z-10 w-full lg:w-1/6 z-10">
                            <a href="" className="w-36 md:w-full rounded-md h-12  text-white/100 mt-2 flex items-center justify-center transition delay-100 ease-in-out duration-300 border border-blue-400 bg-blue-400 hover:text-white hover:border-blue-400 z-10">Read More</a>
                            </div>

                    </div>
            </div>
        </section>
    </>
  )
}

export default BannerTwo