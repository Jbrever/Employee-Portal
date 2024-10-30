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
  CircularProgress,
} from '@mui/material';
import { Visibility, Edit, Delete, Pause, Add } from '@mui/icons-material';
import { getAllProjects, deleteProject } from '@/_services/services_api';
import { ProjectListTable } from '@/components/utils/table';
import ProjectDetailsModal from '@/components/utils/ProjectDetailsModal'; // Import the modal component
import { useRouter } from 'next/navigation'; 
import * as XLSX from 'xlsx';
import toast from 'react-hot-toast';

const MyTable = () => {
  const [projectList, setProjectList] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectStatus, setcurrentProjectStatus] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await getAllProjects();
        setProjectList(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  
  const router = useRouter(); 

  const handleAddProject = () => {
    router.push('/projectTracker'); 
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredProjects);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");
    XLSX.writeFile(workbook, "project_data.xlsx");
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setStatusFilter(value);

    if (value) {
      const filtered = projectList.filter(project => project.projectStatus == value);
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projectList);
    }
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const handleDeleteProject = async (project) => {
    try {
      const response = await deleteProject(project._id); // Assuming deleteProject returns a promise
      if (response.success) {
        toast.success(response.message); // Show success toast
      } else {
        toast.error(response.message); // Show error toast if deletion fails
      }
    } catch (error) {
      toast.error('An error occurred while deleting the project'); // Handle network or other errors
    }
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
const handleStatusChange= (e) => {
  console.log('Change status', e.target);
  // Update project status API call here
}
  return (
    <div className='px-4'>
         {!loading ?(
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

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            onClick={handleAddProject}
            startIcon={<Add />}
            style={{ marginLeft: '16px' }}
          >
            Add New Project
          </Button>
          
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
      </div>
         ):""}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress />
        </div>
      ) : (
        filteredProjects.length > 0 ? (
          <ProjectListTable projectData={filteredProjects} onViewDetails={handleViewDetails} onDeleteProject={handleDeleteProject} handleStatusChange={handleStatusChange} value={currentProjectStatus}/>
        ) : (
          <Typography variant="body1" color="textSecondary">
            No data available
          </Typography>
        )
      )}

      <ProjectDetailsModal
        open={modalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default MyTable;
