import DashboardSideBar from "../../components/DashboardSideBar";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../store/authStore";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

function UserDashboard() {
    const {user} = useContext(AuthContext)
    console.log(user)
    
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-900 to-gray-900 text-white">
      {/* Sidebar - left */}
      <div className="w-64 hidden md:block">
        <DashboardSideBar />
      </div>

      {/* Main Content - right */}
      <div className="flex-1 p-6">
        {/* Top Header - Dashboard heading */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6 flex justify-between">
          <h1 className="text-3xl font-bold text-center">Welcome: {user? user.name : "Guest"}</h1>
          {user?.image ? (<img
          src={`http://localhost:3001/${user.image}`}
          alt="User"
          className="w-8 h-8 object-cover rounded-full"
        />):(<FaUserCircle className="text-white text-3xl" />)}
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default UserDashboard;
