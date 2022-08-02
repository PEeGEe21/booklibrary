import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'

const ErrorPage = () => {
  return (
    <>
        <NavBar/>
        <div className="container  flex justify-center items-center gap-4">

            <div className=" py-[10rem]">
                <h1 className="text-xl">Sorry this page does not exist</h1>
                <p>go back to our homepage</p>
            </div>

        </div>

        <Footer/>
    
    </>
  )
}

export default ErrorPage