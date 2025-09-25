
import React, {useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../MachinesList.css'
import {  columns,TechnicianButtons } from './TechHelp'
import axios from 'axios'
import SideBar from '../SideBars'
import Navbar from '../Navbar'

import '../MachineHelper.css'



function ListT() {
    const [technician, setTechnician] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      
      const onTechnicianDelete = useCallback((id) => {
         setTechnician(prev => prev.filter(technician => technician._id !== id))
       }, []) // no dependencies since it only depends on setMachine

      

     useEffect(()=>{
    const fetchTechnician=async()=>{
      try{
         setLoading(true)
         setError(null)

        const response= await axios.get('http://localhost:3001/Technician',{
          headers: {
            "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        })
        console.log("Server response:", response);
        if (response.status === 200) {
          let sno=1;
                const data =  response.data.technicians.map((technician)=>(
                  {
                    _id:technician._id,
                    sno: sno++,
                    name:technician.name,
                    email:technician.email,
                    phone:technician.phone,
                    specialty:technician.specialty,
                    availability:technician.availability,
                    work:technician.work,
                    
                    action:(<TechnicianButtons id={technician._id} onTechnicianDelete={onTechnicianDelete} />)// Pass ID to buttons


                  }
                

                ))
                setTechnician(data);
            }

      }catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            // CHANGED: Added better error handling
                if (error.code === 'ECONNREFUSED') {
                    setError("Cannot connect to server. Make sure the backend is running on port 5000.");
                } else {
                    setError(error.response?.data?.message || "Error fetching technician")
                }
      } finally {
        setLoading(false)
      }
    }
   fetchTechnician();

  },[onTechnicianDelete])
  
  if (loading) {
    return <div className="machines-container">Loading technician...</div>
  }

  // CHANGED: Added error display
    if (error) {
        return (
            <div className="machines-container">
                <div className="error-message">{error}</div>
                <button onClick={() => window.location.reload()} className="retry-btn">
                    Retry
                </button>
            </div>
        )
    }



      



  return (
    <div className="page-container">
      <SideBar />
      <div className="page-main">
        
    <div className="listContainer">
      <div className="listHeader">
             <h3 >Manage Technicians </h3>
        </div>  
        <div className="listActions">
            <input type="text" placeholder="Search by Availability" className="px-4 py-0.5 border"  />
            <Link to="/home/new-technician" className="list-add-btn">Add New Technician</Link>
        </div>
        <div>
                  <table className="listTable">
                    <thead>
                      <tr>
                        {columns.map((column, index) => (
                          <th key={index}>{column.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {technician && technician.map((row, index) => (
                        <tr key={index}>
                          {columns.map((column, colIndex) => (
                            <td key={colIndex}>{column.selector(row)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                </div>
    </div>
    </div>
    </div>
  )
}

export default ListT