import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Home =() => {

    

    
    return <>
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 text-white px-6">

        {/* Title */}

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Welcome to AttendanceSystem
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center leading-relaxed">
        AttendanceSystem is a smart and modern solution designed to track and manage attendance for employees.
      </p>
    </div>
    
    </>
}

export default Home