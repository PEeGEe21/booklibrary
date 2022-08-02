import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import BestSelling from '../components/home/BestSelling'
import NewRelease from '../components/home/NewRelease'
import BannerOne from '../components/home/BannerOne'
import BannerTwo from '../components/home/BannerTwo'
import Featured from '../components/home/Featured'
import AuthorsPick from '../components/home/AuthorsPick'
import Testimonial from '../components/home/Testimonial'
import PopularAuthors from '../components/home/PopularAuthors'
import {host, addBook} from '../apiCalls';


const Home = () => {
  return (
    <>
        <NavBar/>
            <Hero/>

            <BestSelling/>
            <Featured/>
            <NewRelease/>
            {/* <Categories/> */}
            <BannerOne/>
            <AuthorsPick/>
            <Testimonial/>
            <PopularAuthors/>
            <BannerTwo/>

        <Footer/>
    
    </>
  )
}

export default Home