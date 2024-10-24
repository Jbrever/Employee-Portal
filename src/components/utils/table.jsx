// components/UserTable.js

import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {deleteUser} from '@/_services/services_api'
export const UserTable = ({ data }) => {
    console.log(data,'datatata');
  return (
    <div className="">
  
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Department</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export const PrrojectTable = ({ data }) => {
    console.log(data,'datatata');
  return (
    <div className="">
  
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">end Date</th>
            <th className="border border-gray-300 px-4 py-2">Assigned To</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.startDate}</td>
              <td className="border border-gray-300 px-4 py-2">{user.endDate}</td>
              <td className="border border-gray-300 px-4 py-2">{user.assignedTo}</td>
              <td className="border border-gray-300 px-4 py-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export const LeaveTable = ({ data }) => {
    console.log(data,'datatata');
  return (
    <div className="">
  
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">end Date</th>

          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.startDate}</td>
              <td className="border border-gray-300 px-4 py-2">{user.endDate}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export const EmployeeTable = ({ data }) => {
  console.log(data, 'datatata');

  const handleDelete = (user) => {
    
    // Add delete functionality here
    deleteUser(user._id)
  
  };

  const handleUpdate = (id) => {
    // Add update functionality here
    console.log(`Update user with id: ${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2">
              <input type="checkbox" />
            </th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Position</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Company Name</th>
            <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
            <th className="border border-gray-300 px-4 py-2">Secondary Number</th>
            <th className="border border-gray-300 px-4 py-2">Probation</th>
            <th className="border border-gray-300 px-4 py-2">DOB</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.firstName} {user.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Role}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.companyName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.mobileNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{user.emergencyNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{user.probationMonths}</td>
              <td className="border border-gray-300 px-4 py-2">{moment(user.dateOfBirth).format("DD-MM-YYYY")}</td>
              <td className="border border-gray-300 px-4 py-2">{user.address}</td>
              <td className="border border-gray-300 px-4 py-4 flex space-x-2">
                <button onClick={() => handleUpdate(user.id)} className="text-blue-600 hover:text-blue-800">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDelete(user)} className="text-red-600 hover:text-red-800">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};