import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'

const Cart = () => {
  return (
    <>
        <NavBar/>
            <div>
                <div className=" h-full" style={{backgroundImage: 'url(/bgparallax-07.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                    <div className="container py-7">
                        <h3 className=" mb-5 text-[33px]">Cart</h3>

                        <div>
                            <ol className="breadcrumb mb-0 inline-flex gap-4 text-sm text-gray-500">
                                <li className="breadcrumb-item"><a href="">Home</a></li>
                                <li className="breadcrumb-item"><a href="">Library</a></li>
                                <li className="breadcrumb-item active">Data</li>
                            </ol>
                        </div>
                    </div>
                </div>


<div className="container px-4 sm:px-8">
    <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                 Book
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Author
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Price
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#" className="block relative">
                                            <img alt="profil" src="/images/person/8.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Jean marc
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    Admin
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    12/09/2020
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span className="relative">
                                        active
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#" className="block relative">
                                            <img alt="profil" src="/images/person/9.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Marcus coco
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    Designer
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    01/10/2012
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span className="relative">
                                        active
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#" className="block relative">
                                            <img alt="profil" src="/images/person/10.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Ecric marc
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    Developer
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    02/10/2018
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span className="relative">
                                        active
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#" className="block relative">
                                            <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Julien Huger
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    User
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    23/09/2010
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span className="relative">
                                        active
                                    </span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cart_update text-right">


                                                <button className="mf-btn-2 tran3s" >Clear Cart</button>
                                                
                                            </div>
        </div>
    </div>
</div>


<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow fadeInUp ">
                                            <h4>Cart Totals</h4>
                                            <div className="table-responsive">
                                                <table className="table table-2">
                                                    <tbody>
                                                        <tr>
                                                            <td><span>Cart Subtotal</span></td>
                                                            <td><span>$ </span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Shipping and Handling</span></td>
                                                            <td><span>Free Shipping</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Order Total</span></td>
                                                            <td><span>$ </span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">
                                                

                                                <button className="cart_btn2 tran3s color1_bg" disabled>Proceed to Checkout</button>

                                            
                                            </div>


                                        </div>

                
            </div>
        <Footer/>

    </>
  )
}

export default Cart