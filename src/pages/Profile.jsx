import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'

const Profile = () => {
  return (
    <>
    <NavBar/>
        <div>
            <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                <div className="container py-7">
                    <h3 className=" mb-5 text-[33px]">Profile</h3>

                    <div>
                        <ol className="breadcrumb mb-0 inline-flex gap-4 text-sm text-gray-500">
                            <li className="breadcrumb-item"><a href="">Home</a></li>
                            <li className="breadcrumb-item active"><a href="">Profile</a></li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="container py-[80px]">
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div>yooo1</div>
                    <div>yooo2</div>
                </div>

            </div>

        </div>

        <Footer/>
    </>
  )
}

export default Profile