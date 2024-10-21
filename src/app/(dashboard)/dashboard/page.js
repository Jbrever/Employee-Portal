'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Bell, Briefcase, Calendar } from 'lucide-react';
import { Card, Badge, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EmployeeDashboard({ employeeName }) {
  const employees = [
    { id: 1, name: 'John Doe', department: 'Engineering', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', email: 'jane@example.com' },
  ];

  const notices = [
    'Team meeting on Friday at 3 PM.',
    'Project deadline extended by one week.',
  ];

  const projects = [
    { id: 1, name: 'Project A', startDate: '2023-01-01', endDate: '2023-12-31', assignedTo: 'John Doe', status: 'In Progress' },
    { id: 2, name: 'Project B', startDate: '2023-06-01', endDate: '2023-11-30', assignedTo: 'Jane Smith', status: 'Completed' },
  ];

  const leaves = [
    { id: 1, name: 'Alice Johnson', startDate: '2023-10-20', endDate: '2023-10-25' },
    { id: 2, name: 'Bob Brown', startDate: '2023-10-28', endDate: '2023-10-30' },
  ];

  return (
    <Container fluid className="p-5 bg-gray-100">
      <WelcomeCard name={employeeName} />
      
      <Row className="mt-4">
        <Col md={8}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-sm rounded-lg">
              <Card.Header className="bg-white border-bottom">
                <div className="d-flex align-items-center">
                  <Users className="text-primary me-2" size={24} />
                  <Card.Title className="mb-0">Employee Directory</Card.Title>
                </div>
              </Card.Header>
              <Card.Body>
                <EmployeeTable employees={employees} />
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-sm rounded-lg">
              <Card.Header className="bg-white border-bottom">
                <div className="d-flex align-items-center">
                  <Bell className="text-warning me-2" size={24} />
                  <Card.Title className="mb-0">Notices</Card.Title>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {notices.map((notice, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="d-flex align-items-start mb-3"
                    >
                      <Bell className="text-primary me-2 mt-1" size={16} />
                      <span>{notice}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="shadow-sm rounded-lg">
            <Card.Header className="bg-white border-bottom">
              <div className="d-flex align-items-center">
                <Briefcase className="text-purple me-2" size={24} />
                <Card.Title className="mb-0">Active Projects</Card.Title>
              </div>
            </Card.Header>
            <Card.Body>
              <ProjectTable projects={projects} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm rounded-lg">
            <Card.Header className="bg-white border-bottom">
              <div className="d-flex align-items-center">
                <Calendar className="text-success me-2" size={24} />
                <Card.Title className="mb-0">Upcoming Leaves</Card.Title>
              </div>
            </Card.Header>
            <Card.Body>
              <LeaveTable leaves={leaves} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function EmployeeTable({ employees }) {
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedEmployees.slice(indexOfFirstItem, indexOfLastItem);

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">
              <button 
                onClick={() => handleSort('name')}
                className="text-white focus:outline-none"
              >
                Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
              </button>
            </th>
            <th className="px-6 py-3">Department</th>
            <th className="px-6 py-3">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map(emp => (
            <tr key={emp.id} className="hover:bg-gray-100 transition duration-200">
              <td className="px-6 py-4">{emp.name}</td>
              <td className="px-6 py-4">
                <Badge className="bg-gray-300 text-gray-800">{emp.department}</Badge>
              </td>
              <td className="px-6 py-4">{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white"
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={indexOfLastItem >= employees.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function ProjectTable({ projects }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-6 py-3">Project</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Assigned To</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {projects.map(project => (
          <tr key={project.id} className="hover:bg-gray-100 transition duration-200">
            <td className="px-6 py-4">{project.name}</td>
            <td className="px-6 py-4">
              <Badge className={`text-white ${project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'}`}>
                {project.status}
              </Badge>
            </td>
            <td className="px-6 py-4">{project.assignedTo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function LeaveTable({ leaves }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-6 py-3">Employee</th>
          <th className="px-6 py-3">Duration</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {leaves.map(leave => (
          <tr key={leave.id} className="hover:bg-gray-100 transition duration-200">
            <td className="px-6 py-4">{leave.name}</td>
            <td className="px-6 py-4">{leave.startDate} - {leave.endDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function WelcomeCard({ name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-primary text-white shadow-md rounded-lg">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="mb-2 text-lg font-semibold">Welcome back, {name}! 👋</h2>
            <p className="mb-0 opacity-75">Here's what's happening in your workplace today</p>
          </div>
          <div className="d-none d-md-block">
            <div className="rounded-circle bg-white bg-opacity-10 p-4">
              <Users size={32} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
