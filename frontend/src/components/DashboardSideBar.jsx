import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AuthContext } from '../store/authStore';
import {toast} from "react-toastify"


function DashboardSideBar(){

    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = ()=>{
     logout()
     navigate("/")
     toast.success("Logout successfully", {position:"top-right"})

    }
    return (
        <>
          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center p-4 bg-gray-800 text-white">
            <button onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt3 className="text-2xl" />
            </button>
            <span className="ml-4 font-semibold">Dashboard</span>
          </div>
    
          {/* Sidebar */}
          <div className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <Link to="/dashboard" className="pt-8 block p-6 font-bold text-xl border-b border-gray-700">AttendanceWEBsite</Link>
            <ul className="mt-4">
              <li>
                <Link to="/dashboard/checkin" className="block px-6 py-3 hover:bg-gray-700 transition">CheckIn</Link>
              </li>
              <li>
                <Link to="/settings" className="block px-6 py-3 hover:bg-gray-700 transition">CheckOut</Link>
              </li>
              <li>
                <Link to="/settings" className="block px-6 py-3 hover:bg-gray-700 transition">Salary Slip</Link>
              </li>
              <li>
                <button className="w-full text-left px-6 py-3 hover:bg-gray-700 transition" onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        </>
      );
}

export default DashboardSideBar