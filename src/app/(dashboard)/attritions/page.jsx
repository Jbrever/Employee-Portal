'use client'

import React from 'react'
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  MenuItem,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material'
import {
  Person,
  Grade,
  Business,
  Work,
  Category,
  DateRange,
  Code,
  Assignment
} from '@mui/icons-material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

export default function Component() {
  const [formData, setFormData] = React.useState({
    employeeName: '',
    grade: '',
    branch: '',
    department: '',
    designation: '',
    division: '',
    unit: '',
    category: '',
    project: '',
    birthDate: '',
    employeeCode: '',
    joiningDate: '',
    confirmationDate: '',
    resignOfferDate: '',
    employeeStatus: '',
    resignDate: '',
    leftDate: '',
    reasonOfLeaving: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Add your submission logic here
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', p: 4, bgcolor: 'background.default' }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Employee Attrition Form
            </Typography>
            <form onSubmit={handleSubmit} className='mt-2'>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Employee Name"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Person color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Grade color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Business color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Work color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Unit"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Category color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Assignment color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Birth Date"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: <DateRange color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Employee Code"
                    name="employeeCode"
                    value={formData.employeeCode}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: <Code color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Joining Date"
                    name="joiningDate"
                    type="date"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: <DateRange color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Confirmation Date"
                    name="confirmationDate"
                    type="date"
                    value={formData.confirmationDate}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: <DateRange color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Resign Offer Date"
                    name="resignOfferDate"
                    type="date"
                    value={formData.resignOfferDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: <DateRange color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    select
                    label="Employee Status"
                    name="employeeStatus"
                    value={formData.employeeStatus}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                    <MenuItem value="resigned">Resigned</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Resign Date"
                    name="resignDate"
                    type="date"
                    value={formData.resignDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: <DateRange color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Left Date"
                    name="leftDate"
                    type="date"
                    value={formData.leftDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: <DateRange color="action" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Reason for Leaving"
                    name="reasonOfLeaving"
                    value={formData.reasonOfLeaving}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  )
}