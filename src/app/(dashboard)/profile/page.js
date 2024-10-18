'use client';
import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Card, Tab, Tabs } from 'react-bootstrap';

const EmployeeProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container-fluid mx-auto p-6">
      {/* Top Section */}
      <Card className="mb-6">
        <Card.Body>
          <div className="d-flex flex-wrap gap-6">
            {/* Profile Image Upload */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-200 d-flex align-items-center justify-content-center overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-100 h-100 object-cover" />
                ) : (
                  <Camera className="w-12 h-12 text-gray-400" />
                )}
              </div>
              <label className="position-absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer">
                <Upload className="w-4 h-4" />
                <input type="file" className="d-none" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>

            {/* Basic Info Form */}
            <div className="flex-grow-1">
              <div className="row">
                <div className="col">
                  <label className="form-label">Company Name</label>
                  <select className="form-select">
                    <option>Select Company</option>
                    <option>Company A</option>
                    <option>Company B</option>
                  </select>
                </div>
                <div className="col">
                  <label className="form-label">Employee Code</label>
                  <input type="text" className="form-control" placeholder="EMP001" />
                </div>
                <div className="col">
                  <label className="form-label">Token Number</label>
                  <input type="text" className="form-control" placeholder="TOK001" />
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultActiveKey="personal" className="mb-3">
        <Tab eventKey="personal" title="Personal Information">
          <Card className="mt-3">
            <Card.Body>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Gender</label>
                  <select className="form-select">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Marital Status</label>
                  <select className="form-select">
                    <option>Select Status</option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="employment" title="Employment Information">
          <Card className="mt-3">
            <Card.Body>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Department</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Designation</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Joining Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Employee Type</label>
                  <select className="form-select">
                    <option>Select Type</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                  </select>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="contact" title="Contact Information">
          <Card className="mt-3">
            <Card.Body>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Current Address</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Permanent Address</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="statutory" title="Statutory Information">
          <Card className="mt-3">
            <Card.Body>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">PAN Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Aadhar Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">UAN Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">ESI Number</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default EmployeeProfile;
