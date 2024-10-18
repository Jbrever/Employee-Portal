'use client'
import { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { 
  Users, UserPlus, UserMinus, DollarSign, 
  Building, ChevronDown, Search, Bell
} from 'lucide-react';
import {
  Card,
  
  CardHeader,
  CardTitle,
  Table, // Import Table here
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "react-bootstrap";

const employeeData = [
  { month: 'Jan', hired: 12, left: 5 },
  { month: 'Feb', hired: 15, left: 8 },
  { month: 'Mar', hired: 18, left: 6 },
  { month: 'Apr', hired: 14, left: 7 },
  { month: 'May', hired: 21, left: 9 },
  { month: 'Jun', hired: 25, left: 10 },
];

const departmentData = [
  { department: 'Engineering', count: 45 },
  { department: 'Sales', count: 30 },
  { department: 'Marketing', count: 25 },
  { department: 'HR', count: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const recentEmployees = [
  { id: 1, name: 'John Doe', department: 'Engineering', status: 'Active', joinDate: '2024-03-15' },
  { id: 2, name: 'Jane Smith', department: 'Marketing', status: 'Active', joinDate: '2024-03-10' },
  { id: 3, name: 'Mike Johnson', department: 'Sales', status: 'On Leave', joinDate: '2024-03-05' },
  { id: 4, name: 'Sarah Williams', department: 'HR', status: 'Active', joinDate: '2024-02-28' },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-4 container-fluid">
 

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <div className="flex items-center p-6">
            <div className="p-2 bg-blue-100 rounded-full mr-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Employees</p>
              <h3 className="text-2xl font-bold">115</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center p-6">
            <div className="p-2 bg-green-100 rounded-full mr-4">
              <UserPlus className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">New Hires</p>
              <h3 className="text-2xl font-bold">25</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center p-6">
            <div className="p-2 bg-red-100 rounded-full mr-4">
              <UserMinus className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Turnover Rate</p>
              <h3 className="text-2xl font-bold">8.5%</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center p-6">
            <div className="p-2 bg-purple-100 rounded-full mr-4">
              <Building className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Departments</p>
              <h3 className="text-2xl font-bold">4</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Employee Growth</CardTitle>
          </CardHeader>
          <div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={employeeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="hired" stroke="#0088FE" name="Hired" />
                  <Line type="monotone" dataKey="left" stroke="#FF8042" name="Left" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Employees Table */}

    </div>
  );
}
