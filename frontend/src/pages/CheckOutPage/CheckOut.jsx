import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/token";

function CheckOut() {

    const [data, setData] = useState({})
    const [attendanceId, setAttendanceId] = useState("")

    const fetchData = async ()=>{

        const token = getToken()

        const response = await axios.get("http://localhost:3001/get-single", {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setAttendanceId(response.data.singleRecord._id)
    }

   

    const fetchAttendance = async ()=>{
        const token = getToken()
        const response = await axios.get("http://localhost:3001/get-attendance", {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        setData(response.data.previousAttendance)
    }

    const handleCheckOut = async ()=>{
        try {
            const token = getToken()

        const response = await axios.post("http://localhost:3001/add-checkout", {
            attendance_id:attendanceId
        },
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        
    )

    console.log(response.data.message)
    fetchAttendance()
        } catch (error) {
            console.log(error.response.data.message)
        }
        
    }

    useEffect(()=>{
        fetchData()
        fetchAttendance()
    }, [])


  

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Check-Out History</h2>

      {/* Check-In History Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full table-auto bg-gray-900 rounded-lg shadow-lg">
          <thead>
            <tr className="text-white text-lg border-b border-gray-600">
              <th className="py-2 px-6 text-left">Date</th>
              <th className="py-2 px-6 text-left">Check-Out Time</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
                data.map((item,index)=>{
                    const checkOutTime = item.checkOut ?
                    new Date(item.checkOut).toLocaleTimeString("en-Us", {
                        hour:"2-digit",
                        minute:"2-digit",
                        hour12:true
                    }):"Not Checked Out"
                    const date = new Date(item.date).toLocaleDateString("en-GB")
                    return (
                        <tr key={index} className="hover:bg-gray-700">
                    <td className="py-2 px-6 text-white text-left">{date}</td>
                    <td className="py-2 px-6 text-white text-left">{checkOutTime}</td>
                  </tr>
                    )
                })
            ):(
                <tr>
                <td colSpan="2" className="py-4 text-center text-gray-400">
                  No record found
                </td>
              </tr>
            ) }
                  
          </tbody>
        </table>
      </div>

      {/* Check-In Button */}
      <div className="text-center">
        <button
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center mx-auto"
          onClick={handleCheckOut}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
