'use client'

import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Card, Tab, Tabs, Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import {createProfile} from '@/_services/services_api'
const EmployeeProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    company: '',
    role: '', // Added role field
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    address: '',
    emergencyNo: '',
    pincode: '',
  });

  const [workExperience, setWorkExperience] = useState([{ companyName: '', role: '', experience: '' }]);
  const [education, setEducation] = useState({ qualification: '', year: '', marks: '' });
  const [statutoryInfo, setStatutoryInfo] = useState({
    aadharNo: '',
    panNo: '',
    bankAccountNo: '',
    ifscCode: '',
    branchName: '',
    probationPeriod: false,
    probationMonths: '',
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleWorkChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index][name] = value;
    setWorkExperience(updatedWorkExperience);
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, { companyName: '', role: '', experience: '' }]);
  };

  const removeWorkExperience = (index) => {
    const updatedWorkExperience = workExperience.filter((_, i) => i !== index);
    setWorkExperience(updatedWorkExperience);
  };

  const handleStatutoryChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === 'checkbox') {
      setStatutoryInfo({ ...statutoryInfo, [name]: checked });
    } else {
      setStatutoryInfo({ ...statutoryInfo, [name]: value });
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!personalInfo.firstName) newErrors.firstName = 'First name is required';
    if (!personalInfo.lastName) newErrors.lastName = 'Last name is required';
    if (!personalInfo.dob) newErrors.dob = 'Date of birth is required';
    if (!personalInfo.email) newErrors.email = 'Email is required';
    if (!personalInfo.mobile) newErrors.mobile = 'Mobile number is required';
    if (!statutoryInfo.aadharNo) newErrors.aadharNo = 'Aadhar number is required';
    if (!statutoryInfo.panNo) newErrors.panNo = 'PAN number is required';
    if (!statutoryInfo.bankAccountNo) newErrors.bankAccountNo = 'Bank account number is required';
    if (!statutoryInfo.ifscCode) newErrors.ifscCode = 'IFSC code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return; 
    const formData = {
        photo: profileImage || 'https://example.com/photos/default.jpg', // Fallback if no image uploaded
        companyName: personalInfo.company,
        firstName: personalInfo.firstName,
        // userRole: personalInfo.userRole,
        middleName: personalInfo.middleName,
        lastName: personalInfo.lastName,
        dateOfBirth: personalInfo.dob,
        gender: personalInfo.gender,
        email: personalInfo.email,
        mobileNumber: personalInfo.mobile,
        address: personalInfo.address,
        emergencyNumber: personalInfo.emergencyNo,
        pincode: personalInfo.pincode,
      
            adharNumber: statutoryInfo.aadharNo,
            panNumber: statutoryInfo.panNo,
            bankAccountNumber: statutoryInfo.bankAccountNo,
            IFSCCode: statutoryInfo.ifscCode,
            probationMonths: statutoryInfo.probationPeriod ? statutoryInfo.probationMonths : 0,
  
        workExperience: workExperience.map(work => ({
            companyName: work.companyName,
            role: work.role,
            experience: work.experience,
        })),
        educationHistory: [{
            highestQualification: education.qualification,
            year: education.year,
            marks: education.marks,
        }],
    };

    console.log("Form submitted!", formData);

   const Response =  createProfile(formData)
console.log("Form RESPONSE",Response)
};

  return (
    <Container className="py-5">
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={3} className="text-center">
              <div className="position-relative d-inline-block">
                <div className="rounded-circle overflow-hidden" style={{ width: '150px', height: '150px', border: '4px solid #007bff' }}>
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-100 h-100 object-fit-cover" />
                  ) : (
                    <div className="bg-light d-flex align-items-center justify-content-center h-100">
                      <Camera size={48} className="text-secondary" />
                    </div>
                  )}
                </div>
                <label className="position-absolute bottom-0 end-0 bg-primary text-white p-2 rounded-circle cursor-pointer">
                  <Upload size={20} />
                  <input type="file" className="d-none" onChange={handleImageUpload} accept="image/*" />
                </label>
              </div>
            </Col>
            <Col md={5}> {/* Updated column width */}
              <Form.Group controlId="company">
                <Form.Label className="fw-bold">Company Name</Form.Label>
                <Form.Select name="company" onChange={handlePersonalChange} className="">
                  <option>Select Company</option>
                  <option>NowAwave</option>
                  <option>Geekologix</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}> {/* Added Role dropdown */}
              <Form.Group controlId="role">
                <Form.Label className="fw-bold">Role</Form.Label>
                <Form.Select
                  name="role"
                  onChange={handlePersonalChange}
                  className=""
                >
                  <option value="">Select Role</option>
                  <option value="manager">Manager</option>
                  <option value="superadmin">Superadmin</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Tabs defaultActiveKey="personal" className="mb-4">
        <Tab eventKey="personal" title="Personal Information" tabClassName="fw-bold">
          <Card className="shadow-sm">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="middleName">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="middleName"
                      placeholder="Enter middle name"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name="gender" onChange={handlePersonalChange} className="">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="mobile">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="tel"
                      name="mobile"
                      placeholder="Enter mobile number"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  placeholder="Enter full address"
                  onChange={handlePersonalChange}
                  className=""
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="emergencyNo">
                    <Form.Label>Emergency No</Form.Label>
                    <Form.Control
                      type="tel"
                      name="emergencyNo"
                      placeholder="Enter emergency contact number"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="pincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      name="pincode"
                      placeholder="Enter pincode"
                      onChange={handlePersonalChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="qualification" title="Qualification & Experience" tabClassName="fw-bold">
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="mb-3 text-primary">Work Experience</h5>
              {workExperience.map((work, index) => (
                <Row key={index} className="mb-3 pb-3 border-bottom">
                  <Col md={3}>
                    <Form.Group controlId={`companyName-${index}`}>
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="companyName"
                        placeholder="Enter company name"
                        value={work.companyName}
                        onChange={(e) => handleWorkChange(index, e)}
                        className=""
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId={`role-${index}`}>
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        name="role"
                        placeholder="Enter role"
                        value={work.role}
                        onChange={(e) => handleWorkChange(index, e)}
                        className=""
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId={`experience-${index}`}>
                      <Form.Label>Experience (Years)</Form.Label>
                      <Form.Control
                        type="number"
                        name="experience"
                        placeholder="Enter years of experience"
                        value={work.experience}
                        onChange={(e) => handleWorkChange(index, e)}
                        className=""
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3} className="d-flex align-items-end">
                    <Button variant="danger" onClick={() => removeWorkExperience(index)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
              <Button variant="success" onClick={addWorkExperience} className="mb-4">
                Add Work Experience
              </Button>

              <h5 className="mb-3 text-primary">Education History</h5>
              <Row>
                <Col md={4}>
                  <Form.Group controlId="qualification">
                    <Form.Label>Highest Qualification</Form.Label>
                    <Form.Control
                      type="text"
                      name="qualification"
                      placeholder="Enter highest qualification"
                      value={education.qualification}
                      onChange={handleEducationChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      name="year"
                      placeholder="Enter year of completion"
                      value={education.year}
                      onChange={handleEducationChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="marks">
                    <Form.Label>Marks</Form.Label>
                    <Form.Control
                      type="text"
                      name="marks"
                      placeholder="Enter marks obtained"
                      value={education.marks}
                      onChange={handleEducationChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="statutory" title="Statutory Information" tabClassName="fw-bold">
          <Card className="shadow-sm">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="aadharNo">
                    <Form.Label>Aadhar Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="aadharNo"
                      placeholder="Enter Aadhar number"
                      value={statutoryInfo.aadharNo}
                      onChange={handleStatutoryChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="panNo">
                    <Form.Label>PAN Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="panNo"
                      placeholder="Enter PAN number"
                      value={statutoryInfo.panNo}
                      onChange={handleStatutoryChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bankAccountNo">
                    <Form.Label>Bank Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankAccountNo"
                      placeholder="Enter bank account number"
                      value={statutoryInfo.bankAccountNo}
                      onChange={handleStatutoryChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="ifscCode">
                    <Form.Label>IFSC Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="ifscCode"
                      placeholder="Enter IFSC code"
                      value={statutoryInfo.ifscCode}
                      onChange={handleStatutoryChange}
                      className=""
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="probationPeriod">
                <Form.Check
                  type="checkbox"
                  label="Probation Period Applies"
                  name="probationPeriod"
                  checked={statutoryInfo.probationPeriod}
                  onChange={handleStatutoryChange}
                />
              </Form.Group>
              {statutoryInfo.probationPeriod && (
                <Form.Group className="mb-3" controlId="probationMonths">
                  <Form.Label>Probation Months</Form.Label>
                  <Form.Control
                    type="number"
                    name="probationMonths"
                    placeholder="Enter probation period in months"
                    value={statutoryInfo.probationMonths}
                    onChange={handleStatutoryChange}
                    className=""
                  />
                </Form.Group>
              )}
              <div className="d-flex justify-content-end mt-3">
                <Button variant="primary" size="lg" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default EmployeeProfile;