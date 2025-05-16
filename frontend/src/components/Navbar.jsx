import { useContext, useEffect, useState } from "react"
import {Link, useNavigate, useLocation} from "react-router-dom"
import { AuthContext } from "../store/authStore"
import logo from "../../public/logo.png"



function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false)
    const {isLog, logout} = useContext(AuthContext)
    
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogout = ()=>{
        logout()
        navigate("/")
        
    }
    return <>
    
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">

            {/* Logo */}

            <div className="h-[50px] w-[50px] font-extrabold tracking-wide text-purple-400">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>

            {/* Desktop Links */}

            <div className="hidden md:flex space-x-6 font-medium">
                {isLog ? (<Link className="hover:text-purple-400 transition-colors duration-200" onClick={handleLogout}>Logout</Link>) : (<Link to="/login" className="hover:text-purple-400 transition-colors duration-200">Login</Link>)}
            </div>

            
            {/* Hamburger */}

            <div className="md:hidden flex items-center">
                <button onClick={()=>setMenuOpen(!menuOpen)} className="text-white cursor-pointer p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
                </button>
            </div>

            {/* Mobile Links {toggleable} */}

            <div className={`md:hidden bg-gray-800 text-white text-center w-full absolute top-16 left-0 z-40 shadow-lg transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
                <Link className="block py-3 hover:bg-purple-600">Home</Link>
                <Link to="/login" className="block py-3 hover:bg-purple-600">Login</Link>
                <Link className="block py-3 hover:bg-purple-600">Logout</Link>
                <Link to="/signIn" className="block py-3 hover:bg-purple-600">Sign In</Link>

            </div>


        </nav>
    
    </>
}

export default Navbar