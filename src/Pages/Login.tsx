import { useState } from "react";
import { Link } from "react-router-dom";
import login from '../assets/login.webp'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log("User Login:", {email, password});
        }
  return (
    <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 ">
        <form action="" onClick={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm ">
            <div className="flex justify-center mb-6">
                <h2 className="text-3xl font-medium">Threads</h2>
            </div>
            <h2 className="text-2xl text-center font-bold mb-6">Hey There!👋</h2>
            <p className="text-center mb-6 ">
                Enter your email and password to login.
            </p>
            <div className="mb-4">
               <label className="block text-sm font-semibold mb-2">Email:</label>
               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-700 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Enter Your Email"
               />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-700 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Password"
                />
            </div>
            <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"> Sign In</button>
            <p className="mt-6 text-center tex-sm">
                Don't have an account? {" "} 
                <Link to='/register' className="text-blue-500">
                Register
                </Link>
            </p>
        </form>
         </div>
         <div className="hidden md:block w-1/2 bg-gray-800">
            <div className="h-full flex flex-col justify-center">
                <img src={login} alt="Login to Account" className="h-[750px] w-full object-cover" />
            </div>
         </div>

    </div>
  )
}

export default Login