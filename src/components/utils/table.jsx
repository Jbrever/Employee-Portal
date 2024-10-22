// components/UserTable.js

import React from 'react';

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
