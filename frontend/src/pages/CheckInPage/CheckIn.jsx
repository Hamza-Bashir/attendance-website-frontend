import { useEffect, useState } from "react";
import { checkIn } from "../../services/attendanceService";
import { toast } from "react-toastify";
import axios from "axios";
import { getToken } from "../../utils/token";

function CheckIn() {
  const [attendanceData, setAttendanceData] = useState([]);

  const fetchData = async () => {
    const token = getToken();
    try {
      const response = await axios.get("http://localhost:3001/get-attendance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const previous = response.data.previousAttendance;
      console.log(previous)

      if (previous && previous.length > 0) {
        setAttendanceData(previous);
      } else {
        setAttendanceData([]);
      }
    } catch (err) {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
   

    fetchData();
  }, []);

  const handleCheckin = async () => {
    try {
      const response = await checkIn();
      toast.success(response.data.message, { position: "top-right" });
      fetchData()
    } catch (error) {
      toast.error(error.response?.data?.message || "Check-in failed", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Check-In History</h2>

      {/* Check-In History Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full table-auto bg-gray-900 rounded-lg shadow-lg">
          <thead>
            <tr className="text-white text-lg border-b border-gray-600">
              <th className="py-2 px-6 text-left">Date</th>
              <th className="py-2 px-6 text-left">Check-In Time</th>
              <th className="py-2 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.length > 0 ? (
              attendanceData.map((item, index) => {
                const checkInTime = new Date(item.checkIn).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                });

                const date = new Date(item.date).toLocaleDateString("en-GB");

                return (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="py-2 px-6 text-white text-left">{date}</td>
                    <td className="py-2 px-6 text-white text-left">{checkInTime}</td>
                    <td className="py-2 px-6 text-white text-left">isLate: {item.isLate?"Yes":"No"}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="2" className="py-4 text-center text-gray-400">
                  No record found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Check-In Button */}
      <div className="text-center">
        <button
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center mx-auto"
          onClick={handleCheckin}
        >
          Check In
        </button>
      </div>
    </div>
  );
}

export default CheckIn;
