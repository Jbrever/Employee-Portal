// components/UserTable.js

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,  Typography, } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { deleteUser } from '@/_services/services_api';
import moment from 'moment';
import { Visibility, Edit, Delete, Pause } from '@mui/icons-material';
export const UserTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const PrrojectTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Assigned To</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{moment(project.startDate).format("DD-MM-YYYY")}</TableCell>
              <TableCell>{moment(project.endDate).format("DD-MM-YYYY")}</TableCell>
              <TableCell>{project.assignedTo}</TableCell>
              <TableCell>{project.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const LeaveTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((leave) => (
            <TableRow key={leave.id}>
              <TableCell>{leave.name}</TableCell>
              <TableCell>{moment(leave.startDate).format("DD-MM-YYYY")}</TableCell>
              <TableCell>{moment(leave.endDate).format("DD-MM-YYYY")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export const EmployeeTable = ({ data }) => {
  const handleDelete = (user) => {
    deleteUser(user._id);
  };

  const handleUpdate = (id) => {
    console.log(`Update user with id: ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Position</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Email</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Company Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Mobile Number</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Secondary Number</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Probation</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">DOB</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Address</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" className="text-sm">Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{`${user.firstName} ${user.lastName}`}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{user.Role}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{user.email}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{user.companyName}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{user.mobileNumber}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{user.emergencyNumber}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{user.probationMonths}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">
                  {moment(user.dateOfBirth).format("DD-MM-YYYY")}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" className="text-sm">{user.address}</Typography>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleUpdate(user.id)} color="primary">
                  <FontAwesomeIcon icon={faEdit} />
                </IconButton>
                <IconButton onClick={() => handleDelete(user)} color="error">
                  <FontAwesomeIcon icon={faTrash} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};




export const ProjectListTable = ({ projectData }) => (
  <TableContainer component={Paper} className="w-full shadow-lg p-4">
    <Table sx={{ borderCollapse: 'collapse', width: '100%' }}>
      <TableHead>
        <TableRow>
          {['Project Name', 'Type', 'Client Name', 'Contact Person', 'Start Date', 'Assigned To', 'Contact No.',  'Status', 'Actions'].map((header) => (
            <TableCell align="right" key={header} >
              <Typography variant="body2" className="text-sm">{header}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {projectData.map((project, index) => (
          <TableRow key={project._id} sx={{ background: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
            <TableCell >{project.projectName}</TableCell>
            <TableCell align="right" >{project.projectType}</TableCell>
            <TableCell align="right" >{project.clientName}</TableCell>
            <TableCell align="right" >{project.contactPerson}</TableCell>
            <TableCell align="right" >
              {moment(project.resources[0].startDate).format("DD-MM-YYYY")}
            </TableCell>
            <TableCell align="right" >{project.resources[0].assignedTo}</TableCell>
            <TableCell align="right" >{project.contactNumber}</TableCell>
   
            <TableCell align="right" >
              {project.interested ? 'Interested' : 'Not Interested'}
            </TableCell>
            <TableCell align="right" sx={{ border: '1px solid #ddd', width: '120px' }}>
              <div className="flex justify-around">
                <IconButton color="primary" size="small"><Visibility /></IconButton>
                <IconButton color="secondary" size="small"><Edit /></IconButton>
                <IconButton color="error" size="small"><Delete /></IconButton>
                <IconButton color="default" size="small"><Pause /></IconButton>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);


