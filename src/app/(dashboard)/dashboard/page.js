'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { People, Notifications, Work, EventNote } from '@mui/icons-material';
import { Card, Button, Modal } from 'react-bootstrap'; // Using Bootstrap for modals and cards
import { changePassword } from '@/_services/services_api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; // Importing Material-UI components

const EmployeeDashboard = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  const employeeName = userDetails.first_name;

  useEffect(() => {
    if (userDetails.isFirstLogin) {
      setShowPasswordModal(true);
    }
  }, [userDetails.isFirstLogin]);

  useEffect(() => {
    const passwordLengthValid = newPassword.length >= 8;
    const passwordsMatch = newPassword === confirmPassword;
    const containsNumber = /\d/.test(newPassword);
    setIsPasswordValid(passwordLengthValid && passwordsMatch && containsNumber);
  }, [newPassword, confirmPassword]);

  const handleCloseModal = () => setShowPasswordModal(false);

  const handleChangePassword = (e) => {
    e.preventDefault();
    const payload = {
      email: userDetails.email,
      newPassword,
      confirmPassword,
    };
    changePassword(payload);
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
    <div className="container mt-4">
      <WelcomeCard name={employeeName} />

      {/* Change Password Modal */}
      <Modal show={showPasswordModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please enter your new password. It should be at least 8 characters long and contain at least one number.</p>
          <input
            type="password"
            placeholder="New Password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control mt-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleChangePassword} disabled={!isPasswordValid}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main Content */}
      <div className="row">
        <div className="col-md-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="mb-4">
              <Card.Header className="d-flex align-items-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
                <People className="me-2" />
                <h5 className="mb-0">Employee List</h5>
              </Card.Header>
              <Card.Body>
                <UserTable data={employees} />
              </Card.Body>
            </Card>
          </motion.div>
        </div>

        <div className="col-md-4">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="mb-4">
              <Card.Header className="d-flex align-items-center" style={{ backgroundColor: '#28a745', color: '#fff' }}>
                <Notifications className="me-2" />
                <h5 className="mb-0">Notices</h5>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {notices.map((notice, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                      {notice}
                    </motion.li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Card className="mb-4">
            <Card.Header className="d-flex align-items-center" style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
              <Work className="me-2" />
              <h5 className="mb-0">Active Projects</h5>
            </Card.Header>
            <Card.Body>
              <ProjectTable data={projects} />
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className="mb-4">
            <Card.Header className="d-flex align-items-center" style={{ backgroundColor: '#dc3545', color: '#fff' }}>
              <EventNote className="me-2" />
              <h5 className="mb-0">Upcoming Leaves</h5>
            </Card.Header>
            <Card.Body>
              <LeaveTable data={leaves} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

const WelcomeCard = ({ name }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="mb-4 bg-primary text-white">
        <Card.Body>
          <h1 className="h4">Welcome back, {name}! 👋</h1>
          <p>Here's what's happening in your workplace today:</p>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const UserTable = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow style={{ backgroundColor: '#007bff', color: '#fff' }}>
          <TableCell style={{ color: '#fff' }}>Name</TableCell>
          <TableCell style={{ color: '#fff' }}>Department</TableCell>
          <TableCell style={{ color: '#fff' }}>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.department}</TableCell>
            <TableCell>{employee.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const ProjectTable = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
          <TableCell style={{ color: '#fff' }}>Name</TableCell>
          <TableCell style={{ color: '#fff' }}>Start Date</TableCell>
          <TableCell style={{ color: '#fff' }}>End Date</TableCell>
          <TableCell style={{ color: '#fff' }}>Assigned To</TableCell>
          <TableCell style={{ color: '#fff' }}>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.startDate}</TableCell>
            <TableCell>{project.endDate}</TableCell>
            <TableCell>{project.assignedTo}</TableCell>
            <TableCell>{project.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const LeaveTable = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow style={{ backgroundColor: '#dc3545', color: '#fff' }}>
          <TableCell style={{ color: '#fff' }}>Name</TableCell>
          <TableCell style={{ color: '#fff' }}>Start Date</TableCell>
          <TableCell style={{ color: '#fff' }}>End Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((leave) => (
          <TableRow key={leave.id}>
            <TableCell>{leave.name}</TableCell>
            <TableCell>{leave.startDate}</TableCell>
            <TableCell>{leave.endDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default EmployeeDashboard;
