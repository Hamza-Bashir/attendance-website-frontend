import React, { useEffect, useState } from 'react';
import axios from "axios"
import {getToken} from "../../utils/token"

const SalarySlip = () => {
    const [data, setData] = useState({})
    useEffect(()=>{
        const fetchSalary = async ()=>{
            const token = getToken()
            const response = await axios.get("http://localhost:3001/get-salary", {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setData(response.data.existingSalary)
        }
        fetchSalary()
    }, [])

    useEffect(()=>{
        console.log(data)
    }, [data])
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white text-gray-900 w-full max-w-2xl p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center border-b pb-2">Salary Slip</h1>
        
        <div className="mb-6">
          <p><strong>Employee Name:</strong> {data?.user?.name}</p>
          <p><strong>Month:</strong> {data?.month}</p>
        </div>

        <div className="border-t border-b py-4 mb-4">
          <div className="flex justify-between">
            <span>Basic Salary:</span>
            <span>{data?.baseSalary}</span>
          </div>
          <div className="flex justify-between">
            <span>Late Time Deduction:</span>
            <span>{data?.lateTimeDeductionPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Over Time Incremenet:</span>
            <span>{data?.overTimeIncrementPrice}</span>
          </div>
          <div className="flex justify-between font-semibold mt-2 border-t pt-2">
            <span>Final Price:</span>
            <span>{data?.finalSalary}</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 text-center">
          This is a system-generated salary slip and does not require signature.
        </div>
      </div>
    </div>
  );
};

export default SalarySlip;
