import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './testimonial.css'

const Testimonial = () => {
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

    const TestimonialMembers = [
        {
            id: '1',
            image: '/users/300_6.jpg',
            work: 'Senior Developer, Microsoft',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta placeat atque dolorem molestias quas accusantium porro odit dicta, suscipit inventore quidem facere, minus perspiciatis magnam ipsum repellendus nesciunt expedita',
            author: 'Chezuz Perez',
        },
        {
            id: '2',
            image: '/users/300_9.jpg',
            author: 'Kasim Prose',
            work: 'Google, Expert',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur? Magnam pariatur quisquam molestias eligendi eum expedita quas voluptas suscipit, ea dolorum tempora harum! Aut.',

        },
        {
            id: '3',
            image: '/users/300_4.jpg',
            author: 'Haley Jessie',
            work: 'Author, Love Me',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quam dicta quia accusantium consequatur a, exercitationem, voluptatem provident delectus ipsam praesentium, velit magni illum expedita temporibus iure quo asperiores voluptate.',

        },
    ];
    
  return (
    <section className="testimonial relative" style={{backgroundImage: 'url(/blog/hero2.jpg)', backgroundAttachment: 'scroll', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="container py-5">
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
                            {TestimonialMembers.map((item, index)=>(
                                <div className="flex h-full items-center flex-row justify-center w-full py-12 " key={item.id}>
                
                                    <div className="w-full testimonial-content flex items-center justify-center h-full ">
                                        <div className="text-center ">
                                        <div className="w-[130px] h-[130px] overflow-hidden border-2 border-[#77b748]  flex items-center justify-center rounded-full mx-auto">
                                            <img src={`${item.image}`} className="object-cover w-full h-full  flex items-center justify-center" alt="avatar"/>
                                            {/* <img src="" alt="" /> */}
                                        </div>
                                            {/* <h1>{item.heading}</h1> */}
                                            <div className="testimonial_tg-description text-center">
                                                <p>{item.review}</p>
                                            </div>
                                           
                                                
                                                <hr className="h-[0.25px] w-1/4 my-6 bg-gray-300 border-none dark:bg-gray-200 mx-auto "/> 
                                            <div className="pt-4 testimonial_author">
                                                <h3 className="pb-2">{item.author}</h3>
                                                <span className="mt-2">{item.work}</span>
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

					{/* <div className="home_slider_nav d-flex flex-column align-items-center justify-content-center">
					</div> */}
                </div>
            </section>  
  )
}

export default Testimonial

