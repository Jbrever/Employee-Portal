'use client'
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from '@mui/material';
import { Visibility, Edit, Delete, Pause } from '@mui/icons-material';
import { getAllProjects } from '@/_services/services_api';
import { ProjectListTable } from '@/components/utils/table';
import * as XLSX from 'xlsx';

const MyTable = () => {
  const [projectList, setProjectList] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects();
        setProjectList(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredProjects);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");
    XLSX.writeFile(workbook, "project_data.xlsx");
  };

  const handleFilterChange = (event) => {
    debugger
    const value = event.target.value;
    setStatusFilter(value);

    if (value) {
      const filtered = projectList.filter(project => project.projectStatus == value);
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projectList);
    }
  };

  return (
    <div className='px-4 '>
    

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={handleFilterChange}
            label="Status"
          >
        
            <MenuItem value="">All</MenuItem>
    
            <MenuItem value="1">Running</MenuItem>
            <MenuItem value="2">Hold</MenuItem>
            <MenuItem value="3">Completed</MenuItem>
            <MenuItem value="4">Not close</MenuItem>
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          color="primary" 
          size="small"
          onClick={handleDownload}
          style={{ marginLeft: '16px' }}
        >
          Download Excel
        </Button>
      </div>

      {filteredProjects.length > 0 ? (
        <ProjectListTable projectData={filteredProjects} />
      ) : (
        <Typography variant="body1" color="textSecondary">
          No data available
        </Typography>
      )}
    </div>
  );
};

export default MyTable;
