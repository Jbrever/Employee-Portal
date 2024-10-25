'use client'

import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography
} from '@mui/material'

export default function ProjectForm() {
  const [isInterested, setIsInterested] = useState(false)
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    source: '',
    representative: '',
    clientName: '',
    projectDetails: '',
    contactPerson: '',
    contactNumber: '',
    firstTalkDate: '',
    sendEmail: false,
    resultFirstTalk: '',
    resources: [{ assignedTo: '', numberOfResources: '', startDate: '', expectedEndDate: '', remarks: '' }],
    agreements: {
      msa: { checked: false, dateTime: '' },
      dsa: { checked: false, dateTime: '' },
      nonSolicitation: { checked: false, dateTime: '' },
    }
  })

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleResourceChange = (index, field, value) => {
    const newResources = [...formData.resources]
    newResources[index] = { ...newResources[index], [field]: value }
    setFormData(prev => ({ ...prev, resources: newResources }))
  }

  const handleAgreementChange = (agreement, field, value) => {
    setFormData(prev => ({
      ...prev,
      agreements: {
        ...prev.agreements,
        [agreement]: { ...prev.agreements[agreement], [field]: value }
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your API
  }

  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <CardHeader title="Project Creation Form" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {!isInterested ? (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Project Name"
                    value={formData.projectName}
                    onChange={(e) => handleChange('projectName', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="project-type-label">Project Type</InputLabel>
                  <Select
                    labelId="project-type-label"
                    fullWidth
                    value={formData.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value)}
                  >
                    <MenuItem value="web">Web</MenuItem>
                    <MenuItem value="mobile">Mobile</MenuItem>
                    <MenuItem value="hybrid">Hybrid</MenuItem>
                    <MenuItem value="marketing">Marketing</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Source of Project"
                    value={formData.source}
                    onChange={(e) => handleChange('source', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Representative Name"
                    value={formData.representative}
                    onChange={(e) => handleChange('representative', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Client Name"
                    value={formData.clientName}
                    onChange={(e) => handleChange('clientName', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Contact Person Name"
                    value={formData.contactPerson}
                    onChange={(e) => handleChange('contactPerson', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Contact Person Number"
                    value={formData.contactNumber}
                    onChange={(e) => handleChange('contactNumber', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Date of 1st Talk"
                    type="date"
                    value={formData.firstTalkDate}
                    onChange={(e) => handleChange('firstTalkDate', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    multiline
                    rows={4}
                    label="Project Details"
                    value={formData.projectDetails}
                    onChange={(e) => handleChange('projectDetails', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.sendEmail}
                        onChange={(e) => handleChange('sendEmail', e.target.checked)}
                      />
                    }
                    label="Send email and message on WhatsApp to client"
                  />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end" spacing={1}>
                  <Grid item>
                    <Button variant="contained" color="success" type="submit">Submit</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" onClick={() => console.log('Hold')}>Hold</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="success" onClick={() => setIsInterested(true)}>Next</Button>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mt: 4, fontSize: '1.1rem' }}>Follow-up Actions</Typography>
                  {Object.entries(formData.agreements).map(([agreement, { checked, dateTime }]) => (
                    <Grid container key={agreement} alignItems="center" spacing={2}>
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={(e) => handleAgreementChange(agreement, 'checked', e.target.checked)}
                            />
                          }
                          label={agreement.toUpperCase()}
                        />
                      </Grid>
                      <Grid item xs>
                        <TextField
                          fullWidth
                          size="small"
                          type="datetime-local"
                          value={dateTime}
                          onChange={(e) => handleAgreementChange(agreement, 'dateTime', e.target.value)}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    multiline
                    rows={4}
                    label="Results of the 1st Talk"
                    value={formData.resultFirstTalk}
                    onChange={(e) => handleChange('resultFirstTalk', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Resources Planning</Typography>
                  {formData.resources.map((resource, index) => (
                    <Grid container key={index} spacing={2}>
                      {Object.entries(resource).map(([field, value]) => (
                        <Grid item xs={12} sm={6} key={field}>
                          <TextField
                            fullWidth
                            size="small"
                            label={field.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            value={value}
                            onChange={(e) => handleResourceChange(index, field, e.target.value)}
                            type={field.includes('Date') ? 'date' : 'text'}
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  ))}
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                  <Button variant="contained" color="success" type="submit">Submit</Button>
                </Grid>
              </>
            )}
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}xcxc