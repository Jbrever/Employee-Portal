'use client'
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Briefcase, 
  ChevronUp,
  Clock,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { Card, CardBody, CardHeader, CardTitle, Form } from 'react-bootstrap'; // Adjust according to your UI library

const performanceData = [
  { month: 'Jan', performance: 65 },
  { month: 'Feb', performance: 75 },
  { month: 'Mar', performance: 85 },
  { month: 'Apr', performance: 78 },
  { month: 'May', performance: 90 },
  { month: 'Jun', performance: 88 },
];

const upcomingLeaves = [
  { name: 'Jane Smith', leaveDate: '2024-10-20', days: 5 },
  { name: 'Mike Johnson', leaveDate: '2024-11-01', days: 3 },
];

const budgetData = [
  { category: 'Salaries', budget: 500000, spent: 450000 },
  { category: 'Training', budget: 100000, spent: 80000 },
  { category: 'Benefits', budget: 150000, spent: 120000 },
];

const topPerformers = [
  { name: 'John Doe', department: 'Engineering', performance: 95 },
  { name: 'Sarah Williams', department: 'HR', performance: 90 },
];

export default function Dashboard() {
  const [searchLeaves, setSearchLeaves] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const [searchPerformers, setSearchPerformers] = useState('');

  const filteredLeaves = upcomingLeaves.filter(leave =>
    leave.name.toLowerCase().includes(searchLeaves.toLowerCase())
  );

  const filteredBudget = budgetData.filter(item =>
    item.category.toLowerCase().includes(searchBudget.toLowerCase())
  );

  const filteredPerformers = topPerformers.filter(performer =>
    performer.name.toLowerCase().includes(searchPerformers.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-8 container-fluid">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to your employee management dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Employees Card */}
        <Card className='shadow'>
          <CardBody className="flex items-center p-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Employees</p>
              <h3 className="text-2xl font-bold text-gray-800">1,234</h3>
              <p className="text-sm text-green-600 flex items-center">
                <ChevronUp className="h-4 w-4" />
                12% increase
              </p>
            </div>
          </CardBody>
        </Card>

        {/* Payroll Card */}
        <Card className='shadow'>
          <CardBody className="flex items-center p-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Payroll</p>
              <h3 className="text-2xl font-bold text-gray-800">$284.5k</h3>
              <p className="text-sm text-gray-600">This month</p>
            </div>
          </CardBody>
        </Card>

        {/* On Leave Card */}
        <Card className='shadow'>
          <CardBody className="flex items-center p-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">On Leave</p>
              <h3 className="text-2xl font-bold text-gray-800">23</h3>
              <p className="text-sm text-gray-600">Employees</p>
            </div>
          </CardBody>
        </Card>

        {/* Open Positions Card */}
        <Card className='shadow'>
          <CardBody className="flex items-center p-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Briefcase className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Open Positions</p>
              <h3 className="text-2xl font-bold text-gray-800">15</h3>
              <p className="text-sm text-gray-600">Active jobs</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Activities */}
        <Card className='shadow'>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">New employee joined</p>
                  <p className="text-xs text-gray-500">Sarah Johnson - Designer</p>
                </div>
                <div className="ml-auto">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Leave Request</p>
                  <p className="text-xs text-gray-500">Mike Smith requested leave</p>
                </div>
                <div className="ml-auto">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-gray-500">5h ago</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Project Completed</p>
                  <p className="text-xs text-gray-500">Team A finished Project X</p>
                </div>
                <div className="ml-auto">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-gray-500">1d ago</span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Upcoming Leaves Table */}
      <Card className="mb-8 shadow ">
        <CardHeader className='d-flex align-items-center '>
         <h5> Upcoming Leaves</h5>

          <Form.Control 
            type="text" 
            placeholder="Search by name" 
            value={searchLeaves}
            onChange={(e) => setSearchLeaves(e.target.value)}
            className="my-2 w-25 ml-auto "
          />  
        </CardHeader>
        <CardBody>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Leave Date</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLeaves.map((leave, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{leave.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{leave.leaveDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{leave.days}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Budget Table */}
      <Card className="mb-8 shadow">
      <CardHeader className='d-flex align-items-center '>
        <h5>
          Budget Overview
        </h5>
        <Form.Control 
            type="text" 
            placeholder="Search by category" 
            value={searchBudget}
            onChange={(e) => setSearchBudget(e.target.value)}
               className="my-2 w-25 ml-auto "
          />
          </CardHeader>
        <CardBody>
         
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Spent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBudget.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">${item.budget.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">${item.spent.toLocaleString()}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Top Performers Table */}
      <Card className='shadow'>
      <CardHeader className='d-flex align-items-center '>
          <h5>Top Performers</h5>
          <Form.Control 
            type="text" 
            placeholder="Search by name" 
            value={searchPerformers}
            onChange={(e) => setSearchPerformers(e.target.value)}
                 className="my-2 w-25 ml-auto "
          />
        </CardHeader>
        <CardBody>
        
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Performance Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPerformers.map((performer, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{performer.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{performer.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{performer.performance}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
