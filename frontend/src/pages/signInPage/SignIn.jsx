import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import { signIn } from "../../services/authService"
import {toast} from "react-toastify"

function SignIn(){

    const navigate = useNavigate()

    const [data, setData] = useState({
        name:"",
        password:"",
        email:"",
        file:""
    })

    const handleChange = (e)=>{
        const {name, value, type, files} = e.target

        setData((prevData)=>({
            ...prevData,
            [name]:type === 'file' ? files[0] : value
        }))

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("email",data.email)
        formData.append("password", data.password)
        formData.append("image", data.file)
        try{
            const response = await signIn(formData, {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            console.log(response.data)
            navigate("/login")
            toast.success(response.data.message, {position:"top-right"})
        }catch (error){
            setData({
                name:"",
                email:"",
                password:"",
                file:''
            })
            console.log(error)
            toast.error(error.response.data.message, {position:"top-right"})
        }

        

    }
    return <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 px-4">

    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Create Account</h2>

        <form action="" className="space-y-4" onSubmit={(e)=>handleSubmit(e)}>

            <div>
                <label htmlFor="" className="block text-gray-700 mb-1">Full Name</label>
                <input 
                type="text"
                name="name"
                value={data.name} 
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

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

            <input
                type="file"
                name="image"
                onChange={handleChange}
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