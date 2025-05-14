import {Link} from "react-router-dom"
function Login(){
    return <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 px-4">
    
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Login</h2>
    
            <form action="" className="space-y-4">
    
                
    
                <div>
                    <label htmlFor="" className="block text-gray-700 mb-1">Email</label>
                    <input 
                    type="email" 
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
    
                <div>
                    <label htmlFor="" className="block text-gray-700 mb-1">Password</label>
                    <input 
                    type="password" 
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
    
                
    
                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white font-semibold py-2 rounded-md hover:bg-purple-800 transition duration-200"
                >
                    Login
                    </button>
    
            </form>
    
            {/* Already have an account */}
            <p className="mt-6 text-sm text-center text-gray-600">
              Do not have an account?{" "}
              <Link to="/signIn" className="text-purple-700 font-medium hover:underline">
                SignIn
              </Link>
            </p>
        </div>
        </div>
    
    </>
}

export default Login