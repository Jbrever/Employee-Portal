'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Bell, Briefcase, Calendar } from 'lucide-react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LeaveTable,PrrojectTable,UserTable} from '@/components/utils/table'

function EmployeeDashboard({ employeeName }) {
  const [showPasswordModal, setShowPasswordModal] = useState(true);

  const handleCloseModal = () => {
    setShowPasswordModal(false);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Implement password change logic here
    handleCloseModal();
  };

  const employees = [
    { id: 1, name: 'John Doe', department: 'Engineering', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', department: 'Sales', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', department: 'HR', email: 'bob@example.com' },
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

      <Modal show={showPasswordModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleChangePassword}>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input type="password" className="form-control" id="newPassword" required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" required />
            </div>
            <Button variant="primary" type="submit">Change Password</Button>
          </form>
        </Modal.Body>
      </Modal>

      <Row className="mt-4">
        <Col md={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="shadow-sm rounded-lg overflow-hidden">
              <div className="bg-[#168aad] text-white p-3">
                <div className="flex items-center">
                  <Users className="text-white mr-2" size={24} />
                  <h5 className="font-semibold mb-0">Employee List</h5>
                </div>
              </div>
              <div className="p-4">
                <UserTable data={employees} />
              </div>
            </div>
          </motion.div>
        </Col>

        <Col md={4}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="shadow-sm rounded-lg h-full overflow-hidden">
              <div className="bg-[#f7b801] text-white p-3">
                <div className="flex items-center">
                  <Bell className="text-white mr-2" size={24} />
                  <h5 className="font-semibold mb-0">Notices</h5>
                </div>
              </div>
              <div className="p-4">
                <ul className="list-none">
                  {notices.map((notice, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start mb-3">
                      <Bell className="text-blue-500 mr-2" size={16} />
                      <span>{notice}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <div className="shadow-sm rounded-lg h-full overflow-hidden">
            <div className="bg-[#168aad] text-white p-3">
              <div className="flex items-center">
                <Briefcase className="text-white mr-2" size={24} />
                <h5 className="font-semibold mb-0">Active Projects</h5>
              </div>
            </div>
            <div className="p-4">
              <PrrojectTable data={projects} />
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="shadow-sm rounded-lg h-full overflow-hidden">
            <div className="bg-[#84a98c] text-white p-3">
              <div className="flex items-center">
                <Calendar className="text-white mr-2" size={24} />
                <h5 className="font-semibold mb-0">Upcoming Leaves</h5>
              </div>
            </div>
            <div className="p-4">
              <LeaveTable data={leaves} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function WelcomeCard({ name }) {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-[#134074] text-white shadow-lg rounded-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Welcome back, {name}! 👋</h2>
          <p className="mb-1 opacity-75">Here's what's happening in your workplace today:</p>
        </div>
        <div className="hidden md:block">
          <div className="bg-white bg-opacity-10 rounded-full p-4">
            <Users size={32} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EmployeeDashboard;
