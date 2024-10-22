'use client';
import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Card, Tab, Tabs, Button } from 'react-bootstrap';

const EmployeeProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="container mx-auto p-6">
      {/* Top Section */}
      <Card className="mb-6 rounded-lg">
        <Card.Body>
          <div className="flex flex-wrap gap-6">
            {/* Profile Image Upload */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-blue-500">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-12 h-12 text-gray-400" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer">
                <Upload className="w-4 h-4" />
                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>

            {/* Basic Info Form */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="form-label">Company Name</label>
                  <select className="form-select border border-gray-300 rounded-md p-2">
                    <option>Select Company</option>
                    <option>Company A</option>
                    <option>Company B</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Employee Code</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" placeholder="EMP001" />
                </div>
                <div>
                  <label className="form-label">Token Number</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" placeholder="TOK001" />
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultActiveKey="personal" className="mb-3" style={{ width: '100%' }}>
        <Tab eventKey="personal" title="Personal Information">
          <Card className="mt-3 rounded-lg">
            <Card.Body>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select className="form-select border border-gray-300 rounded-md p-2">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Marital Status</label>
                  <select className="form-select border border-gray-300 rounded-md p-2">
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
          <Card className="mt-3 rounded-lg">
            <Card.Body>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Designation</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Joining Date</label>
                  <input type="date" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Employee Type</label>
                  <select className="form-select border border-gray-300 rounded-md p-2">
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
          <Card className="mt-3 rounded-lg">
            <Card.Body>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Current Address</label>
                  <textarea className="form-control border border-gray-300 rounded-md p-2" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Permanent Address</label>
                  <textarea className="form-control border border-gray-300 rounded-md p-2" rows="3"></textarea>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="statutory" title="Statutory Information">
          <Card className="mt-3 rounded-lg">
            <Card.Body>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-3">
                  <label className="form-label">PAN Number</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Aadhar Number</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">UAN Number</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">ESI Number</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bank Account Number</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-3">
                  <label className="form-label">IFSC Code</label>
                  <input type="text" className="form-control border border-gray-300 rounded-md p-2" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EmployeeProfile;
