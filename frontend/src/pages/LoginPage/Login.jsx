import {Link, useNavigate} from "react-router-dom"
import {useContext, useState} from "react"
import {logIn} from "../../services/authService"
import {toast} from "react-toastify"
import { AuthContext } from "../../store/authStore"


function Login(){
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const [data,setData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target

        setData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try {
            const response = await logIn(data)
            navigate("/dashboard")
            toast.success(response.data.message, {position:"top-right"})
            login(response.data.token, response.data.user)
        } catch (error) {
            const errRes = error?.response?.data

            setData({
                email:"",
                password:""
            })

            if(Array.isArray(errRes?.message)){
                errRes.message.forEach(msg=>{
                    toast.error(msg, {position:"top-right"})
                })
            }else if(typeof errRes?.message === "string"){
                toast.error(errRes.message, {position:"top-right"})
            }else if(errRes?.error){
                toast.error(errRes.error, {position:"top-right"})
            }else{
                toast.error("Something went wrong", {position:"top-right"})
            }
        }
    }
    return <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 px-4">
    
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Login</h2>
    
            <form action="" className="space-y-4" onSubmit={(e)=>handleSubmit(e)}>
    
                
    
                <div>
                    <label htmlFor="" className="block text-gray-700 mb-1">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
    
                <div>
                    <label htmlFor="" className="block text-gray-700 mb-1">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    value={data.password}
                    onChange={handleChange}
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
                Register
              </Link>
            </p>
        </div>
        </div>
    
    </>
}

export default Login