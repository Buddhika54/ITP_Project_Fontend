import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { columns, EmployeeButtons } from '../../utills/EmpHelper'
import DataTable from 'react-data-table-component'

const EmpList = () => {

  const [employees, setEmployees] = useState([])
  const [empLoading, setEmpLoarding] = useState(false)
  const [filterEmployee, setFilterEmployee] = useState([])

  useEffect(() => {
    const fetchEmployee = async () => {
      setEmpLoarding(true)
      try {
        const base = process.env.REACT_APP_API_URL || 'http://127.0.0.1:3001'
        const response = await axios.get(`${base}/api/employee`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (response.data.success) {
          let sno = 1;
          const data = response.data.employees.map((emp) => {
            const depName = emp?.department?.dep_name || '-'
            const userName = emp?.userId?.name || '-'
            const dob = emp?.dob ? new Date(emp.dob).toLocaleDateString() : '-'
            const imgSrc = emp?.userId?.profileImage ? `${base}/${emp.userId.profileImage}` : null

            return {
              _id: emp?._id,
              sno: sno++,
              dep_name: depName,
              name: userName,
              dob: dob,
              profileImage: imgSrc ? (
                <img
                  width={40}
                  height={40}
                  className='rounded-full ring-2 ring-gray-200 shadow-sm'
                  src={imgSrc}
                  alt='Employee'
                />
              ) : null,
              action: (<EmployeeButtons _id={emp?._id} />),
            }
          });
          setEmployees(data);
          setFilterEmployee(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error)
        }
      } finally {
        setEmpLoarding(false)
      }
    };

    fetchEmployee();
  }, []);

  const handleFilter = (e) => {
    const record = employees.filter((emp) => (
      emp.name.toLowerCase().includes(e.target.value.toLowerCase())
    ))
    setFilterEmployee(record)
  }

  return (
    <>
      {empLoading ? (
        <div className="text-center py-6 text-gray-600">Loading...</div>
      ) : (
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-gray-800'>Manage Employees</h3>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
            <input
              type="text"
              placeholder='Search By Emp Name'
              className='px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none w-full md:w-1/3'
              onChange={handleFilter}
            />
            <Link
              to="/admin-dashboard/add-employee"
              className='px-4 py-2 bg-green-600 hover:bg-green-600 text-white rounded-md font-medium shadow transition'
            >
              Add New Employee
            </Link>
          </div>
          <div>
            {filterEmployee && filterEmployee.length > 0 ? (
              <DataTable
                columns={columns}
                data={filterEmployee}
                pagination
              />
            ) : (
              <div className='text-center text-gray-500 py-6 italic'>
                No employees to display.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default EmpList
