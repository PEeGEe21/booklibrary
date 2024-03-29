import React, {useState, useEffect} from 'react'    
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { Link } from 'react-router-dom';

import './auth.css'
const Login = () => {

        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [inputs, setInputs] = useState({
            username: '',
            password: '',
        });
    
        const [error, setError] = useState(null);
        
    
        const toastOptions = {
            duration: 8000,
            position: 'bottom-right',
            // Styling
            style: {},
            className: '',
            // Custom Icon
            // icon: '👏',
            // Change colors of success/error/loading icon
            iconTheme: {
                primary: 'red',
                secondary: '#fff',
            },
            // Aria
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        }
    
        // const handleCheckboxChange = () =>{
        //     console.log("changesss")
        // }
    
        // useEffect(() => {
        //     if (localStorage.getItem('chatify-user')) {
        //       router.push("/");
        //     }
        // }, []);
        
        // useEffect(() => {
        //     async function checkUser() {
        //         if (!localStorage.getItem('chatify-user'))
        //             router.push("/login");
        //     }
        //     checkUser();
        //   }, []); 
    
    
        // const handleChange = (e) =>{
        //     setInputs(prev => {
        //         return {...prev, [e.target.name]:e.target.value}
        //     })
        // }
    
        // const handleValidation = () =>{
        //     const {password, username} = inputs;
        //     if (username === "") {
        //         toast.error("Username and Password is required.", toastOptions);
        //         return false;
        //       } else if (password === "") {
        //         toast.error("Username and Password is required.", toastOptions);
        //         return false;
        //     }
            
        //    return true; 
        // };
    
        // const handleSubmit = async (e) =>{
        //     e.preventDefault();
            
            
        //     if(handleValidation()){
        //         try {
        //             console.log("in validation", loginRoute);
        //             const {password, username} = inputs;
    
        //             const data = await axios.post(loginRoute, {
        //                 username, 
        //                 password
        //             })
        //             if (data.data.status === false) {
        //                 toast.error(data.data.msg, toastOptions);
        //             }
        //             if (data.data.status === true) {
        //                 // console.log(data.data.user)
        //                 localStorage.setItem(
        //                     'chatify-user',
        //                     JSON.stringify(data.data.user)
        //                   );
        //                 router.push("/");
        //             }
        //             console.log(data);
        //         } catch(err){
        //             toast.error(err, toastOptions);
    
        //         }
        //     }
            
        // }
    
        useEffect(() => {
            // router.prefetch('/')
        }, [])
  return (
    <>
    
        

        <Toaster />

        <div className="outer-login-box bg-indigo-100">
            <div className="flex flex-col md:flex-row items-center justify-between m-auto max-w-[900px] h-full md:h-[500px] shadow-lg rounded-lg">
                <div className="bg-gray-800 w-[100%] md:w-[50%]  h-full flex items-center justify-center flex-column relative rounded-none md:rounded-l-lg">
                        <img src="/product7.jpg" alt="vrv" className="object-cover h-full w-full rounded-none md:rounded-l-lg"/>
                </div>
                    <div className="w-[100%] md:w-[50%] bg-gray-100  flex items-center justify-center h-full rounded-r-lg">
                        <div className="p-[30px] w-full  ">
                        
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white mb-3 text-center underline">Login</h2>
    
                                                        {/* <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to start texting</p> */}
    
    
                            </div>
                            <form >
                                <div className="grid grid-cols-1 gap-7 mt-4 sm:grid-cols-1">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                                        <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-sm bg-transparent"  name="username" min={3}/>
                                    </div>
    
                                    <div>
                                        <div className="flex items-center justify-between">
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                                            <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                                        </div>
                                        <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-sm bg-transparent"  name="password"/>
                                    </div>
    
                                    
                                </div>
    
                                <div className="flex items-center justify-start mt-5">
                                    <input type="checkbox" id="rem_checkbox" className="mr-2 leading-tight focus:shadow-none focus:ring-0 focus:outline-0"/>
                                    <label htmlFor="rem_checkbox" className="text-sm text-gray-600 dark:text-gray-400 ">Remember Me?</label>
                                </div>
    
                                <div className="flex justify-center items-center mt-6">
                                    <button className="px-6 py-2 leading-5 transition-colors duration-200 transform border border-gray-400 hover:border-gray-700 text-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-600 w-full h-10 " >Continue</button>
                                </div>
    
                                <div className="flex items-center justify-between mt-6">
                                    <span className="w-1/5 border-b border-gray-400 md:w-1/4"></span>
                                    <Link to="/signup" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"> sign up
    
                                    </Link>
                                    
                                    <span className="text-xs text-gray-500 uppercase dark:text-gray-400">or</span>

                                    <Link to="/" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"> 
                                    
                                    Go home
    
                                    </Link>
                                    
                                    <span className="w-1/5 border-b border-gray-400 md:w-1/4"></span>
                                </div>
                            </form>
        
                        </div>
                    </div>   
            </div>
        </div>

    </>
  )
}

export default Login