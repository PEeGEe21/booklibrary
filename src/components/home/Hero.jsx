import React from 'react'

// import 'jquery/dist/jquery';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
// import 'jquery/dist/jquery';
import './hero.css'

const Hero = () => {

    const state={
        responsive:{
            0:{
                items:1
            },
            650:{
                items:1
            },			
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    }

    const HeroItems = [
        {
            id: '1',
            image: '/books/img-03.jpg',
            heading: 'LoremIpsum 1',
            desc: 'Consectetur adipisicing elit eiusmod lotanae pokalate sinote tempor incididunt ut labore popouye asoter.',
            
        },
        {
            id: '2',
            image: '/books/img-09.jpg',
            heading: 'LoremIpsum 2',
            desc: 'Consectetur adipisicing elit eiusmod lotanae pokalate sinote tempor incididunt ut labore popouye asoter.',
        },
    ];

  return (
        <>
            <section className="slider relative">
            <OwlCarousel 
                        items={1} 
                        className="owl-theme" 
                        loop
                        nav 
                        margin={0} 
                        autoplay={false}
                        smartSpeed= {300}
                        autoplaySpeed= {1000}
                        autoplayHoverPause={true}
                        navspeed= {1000}
                        paginationspeed= {1000}
                        slidespeed={800}
                        dots={false} 
                        responsive={state.responsive}
                        >
                            {HeroItems.map((item, index)=>(
                                <div className="flex h-full items-center flex-row justify-center w-full h-[500px] " key={item.id}>
                                    <div className="w-[50%] h-full hidden md:block bg-gray-200">
                                        {/* <div className="">
                                            <img src={`${item.image}`} className="w-full h-full"/>
                                        </div> */}
                                        <div className="hero-book-container mt-6">
                                            <div className="hero-book">
                                                <img src={`${item.image}`} alt="" className="w-full"/>
                                            </div>
                                        </div>
                                    </div>
                
                                    <div className="w-full md:w-[50%] hero-content flex items-center justify-center h-full ">
                                        <div className="">
                                            <h1>{item.heading}</h1>
                                            <div className="tg-description">
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="p-3 px-4 text-sm text-white h-12 w-1/3 border border-[#77b748] mr-4 ">Read More</button>
                                                <button className="bg-[#77b748] text-sm text-white rounded-md p-3 px-4 w-1/3 h-12 ">Buy Now</button>
                                            </div>
                
                                        </div>
                                    </div>
                                </div>
                            ))}
                

                {/* <div className="flex h-full items-center flex-row justify-center w-full h-[500px] ">
                    <div className="w-[50%] h-full">
                        <img src="/product7.jpg " className="w-full h-full"/>
                    </div>

                    <div className="w-[50%] hero-content flex items-center justify-center h-full">
                        <div className="">
                            <h1>LOrem Ipmsum</h1>
                            <div className="tg-description">
                                <p>Consectetur adipisicing elit eiusmod lotanae pokalate sinote tempor incididunt ut labore popouye asoter.</p>
                            </div>
                            <div>
                                <button className="p-3 bg-gray-700 text-white">Read Now</button>
                                <button>Read Now</button>
                            </div>

                        </div>
                    </div>
                </div> */}
              </OwlCarousel>

					<div className="home_slider_nav d-flex flex-column align-items-center justify-content-center">
					</div>
            </section>  
        </>
  )
}

export default Hero