import {Link} from "react-router-dom"
import {useState} from "react"

function SignIn(){

    const [data, setData] = useState({
        name:"",
        password:"",
        email:"",
        file:""
    })
    return <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 px-4">

    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Create Account</h2>

        <form action="" className="space-y-4">

            <div>
                <label htmlFor="" className="block text-gray-700 mb-1">Full Name</label>
                <input 
                type="text"
                value={data.name} 
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <div>
                <label htmlFor="" className="block text-gray-700 mb-1">Email</label>
                <input 
                type="email" 
                value={data.email}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <div>
                <label htmlFor="" className="block text-gray-700 mb-1">Password</label>
                <input 
                type="password" 
                value={data.password}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <input
                type="file"
                value={data.file}
                className="w-full border py-2 px-3 rounded-md bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
                />

            <button
                type="submit"
                className="w-full bg-purple-700 text-white font-semibold py-2 rounded-md hover:bg-purple-800 transition duration-200"
            >
                Sign Up
                </button>

        </form>

        {/* Already have an account */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-700 font-medium hover:underline">
            Login
          </Link>
        </p>
    </div>
    </div>
    
    </>
}

export default SignIn