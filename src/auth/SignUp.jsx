import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <div className="outer-login-box bg-indigo-100">
            <div className="flex flex-col md:flex-row items-center justify-between m-auto max-w-[900px] h-full md:h-[520px] shadow-lg rounded-lg">
                <div className="bg-gray-800 w-[100%] md:w-[50%]  h-full flex items-center justify-center flex-column relative rounded-none md:rounded-l-lg">
                        <img src="/product7.jpg" alt="vrv" className="object-cover h-full w-full rounded-none md:rounded-l-lg"/>
                </div>
                <div className="w-[100%] md:w-[50%] bg-gray-100  flex items-center justify-center h-full rounded-r-lg">
                    <div className="p-[30px] w-full  ">

                        <div className="mb-5 text-center">
                            <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white mb-5 text-center underline">Sign Up</h2>
                            {/* <p className="mt-3 text-gray-500 dark:text-gray-300">Create an account to start texting</p> */}
                        </div>
                        <form>
                            <div className="grid grid-cols-1 gap-3 mt-6 sm:grid-cols-1">
                                <div className="mb-2">
                                    <label className="text-gray-700 dark:text-gray-200 text-sm" htmlFor="username">Username</label>
                                    <input id="username" type="text" className="h-10 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-sm bg-transparent" name="username"/>
                                </div>

                                <div className="mb-2">
                                    <label className="text-gray-700 dark:text-gray-200 text-sm" htmlFor="emailAddress">Email</label>
                                    <input id="emailAddress" type="email" className="h-10 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-sm bg-transparent"  name="email"/>
                                </div>

                                <div className="mb-2">
                                    <label className="text-gray-700 dark:text-gray-200 text-sm" htmlFor="password">Password</label>
                                    <input id="password" type="password" className="h-10 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-sm bg-transparent" name="password"/>
                                </div>

                                {/* <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
                                    <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div> */}
                            </div>

                            <div className="flex items-center justify-start mt-4">
                                <input type="checkbox" id="rem_checkbox" className="mr-2 leading-tight focus:shadow-none focus:ring-0 focus:outline-0 "/>
                                <label htmlFor="rem_checkbox" className="text-sm text-gray-600 dark:text-gray-400 ">I agree to our Terms and Conditions</label>
                            </div>

                            <div className="flex justify-center items-center mt-6">
                            {/* <button class="group relative inline-flex border border-red-600 focus:outline-none mt-6" href="/docs/starter-kits">
                                <span class="w-full inline-flex items-center justify-center self-stretch px-6 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                                    Continue
                                </span>
                            </button> */}
                                <button className="px-6 py-2 leading-5 text-sm text-white transition-colors duration-200 transform bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:bg-gray-600 w-full h-10">Continue</button>
                            </div>

                            <div className="flex items-center justify-between mt-5">
                                <span className="w-1/5 border-b border-gray-400 md:w-1/5"></span>

                                <span className="text-xs text-gray-500 uppercase dark:text-gray-400">
                                    <Link to="/login" className="hover:underline">or sign in
                                    </Link>
                                </span>
                                
                                <span className="w-1/5 border-b border-gray-400 md:w-1/5"></span>
                            </div>
                        </form>
    
                    </div>
                </div>  
            </div>
        </div>
    </>
  )
}

export default SignUp