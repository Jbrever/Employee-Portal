// components/ProjectForm.js
'use client'
import React, { useState } from 'react';

const ProjectForm = () => {
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
    interested: false,
    resultFirstTalk: '',
    resources: [{ assignedTo: '', numberOfResources: '', startDate: '', expectedEndDate: '', remarks: '' }],
    agreements: {
      msa: { checked: false, dateTime: '' },
      dsa: { checked: false, dateTime: '' },
      nonSolicitation: { checked: false, dateTime: '' },
    }
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("resource")) {
      const index = parseInt(name.split('_')[1], 10);
      const fieldName = name; // Extract the field name after 'resource'
      const newResources = [...formData.resources];
      newResources[index][fieldName] = value;   
      setFormData({ ...formData, resources: newResources });
    } else if (name.startsWith("agreements")) {
      const [agreementName, field] = name.split('_');
      setFormData({
        ...formData,
        agreements: {
          ...formData.agreements,
          [agreementName]: {
            ...formData.agreements[agreementName],
            [field]: field === 'checked' ? checked : value,
          },
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'sendEmail' && key !== 'interested') {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Handle form submission (e.g., sending data to an API)
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-2">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!formData.interested ? (
          <>
            {/* Dropdown for Company Names */}
            <div className="flex flex-col mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Company</label>
              <select
                name="company"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150 bg-transparent"
              >
                <option value="">Select a company...</option>
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
                <option value="Company C">Company C</option>
                <option value="Company D">Company D</option>
              </select>
            </div>

            {/* Project Fields in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Project Name', name: 'projectName', type: 'text' },
                { label: 'Source of Project', name: 'source', type: 'text' },
                { label: 'Representative Name', name: 'representative', type: 'text' },
                { label: 'Client Name', name: 'clientName', type: 'text' },
                { label: 'Contact Person Name', name: 'contactPerson', type: 'text' },
                { label: 'Contact Person Number', name: 'contactNumber', type: 'tel' },
                { label: 'Project Details', name: 'projectDetails', type: 'textarea' },
              ].map(({ label, name, type }) => (
                <div key={name} className="flex flex-col">
                  <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
                  {type === 'textarea' ? (
                    <textarea
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={`w-full border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
                    />
                  ) : (
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={`w-full border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
                    />
                  )}
                  {errors[name] && <span className="text-red-500 text-sm mt-1">{errors[name]}</span>}
                </div>
              ))}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 bg-transparent focus:ring-2 focus:ring-blue-500 transition duration-150`}
                >
                  <option value="">Select...</option>
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <span className="text-red-500 text-sm mt-1">{errors.projectType}</span>}
              </div>
            </div>

            {/* About 1st Talk Section */}
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">About 1st Talk</h2>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Date of 1st Talk</label>
              <input
                type="date"
                name="firstTalkDate"
                value={formData.firstTalkDate}
                onChange={handleChange}
                className={`w-full border ${errors.firstTalkDate ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
              />
              {errors.firstTalkDate && <span className="text-red-500 text-sm mt-1">{errors.firstTalkDate}</span>}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="sendEmail"
                checked={formData.sendEmail}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">Send email and message on WhatsApp to client</label>
            </div>
            <div className="flex justify-end mt-4">
              <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-150">Submit</button>
            </div>
            <div className="flex justify-end mt-4">
              <button type="button" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-150 me-4">Hold</button>

              <button type="button" onClick={() => setFormData({ ...formData, interested: true })} className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-500 transition duration-150">Next</button>
            </div>
          </>
        ) : (
          <>
            {/* Follow-up Actions Section */}
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Follow-up Actions</h3>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Remember to send:</label>
              {['msa', 'dsa', 'nonSolicitation'].map((agreement) => (
                <div key={agreement} className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name={`agreements_${agreement}_checked`}
                    checked={formData.agreements[agreement].checked}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-700 capitalize">{agreement}</label>
                  <input
                    type="datetime-local"
                    name={`agreements_${agreement}_dateTime`}
                    value={formData.agreements[agreement].dateTime}
                    onChange={handleChange}
                    className="ml-2 w-1/3 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Results of the 1st talk</label>
              <textarea
                name="resultFirstTalk"
                value={formData.resultFirstTalk}
                onChange={handleChange}
                className={`w-full border ${errors.resultFirstTalk ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
              />
            </div>

            <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">Resources Planning</h3>
            {formData.resources.map((resource, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Assigned To</label>
                  <input
                    type="text"
                    name={`resource_assignedTo_${index}`}
                    value={resource.assignedTo}
                    onChange={handleChange}
                    className={`w-full border ${errors[`resource_assignedTo_${index}`] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Number of Resources</label>
                  <input
                    type="number"
                    name={`resource_numberOfResources_${index}`}
                    value={resource.numberOfResources}
                    onChange={handleChange}
                    className={`w-full border ${errors[`resource_numberOfResources_${index}`] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Start Date</label>
                  <input
                    type="date"
                    name={`resource_startDate_${index}`}
                    value={resource.startDate}
                    onChange={handleChange}
                    className={`w-full border ${errors[`resource_startDate_${index}`] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Expected End Date</label>
                  <input
                    type="date"
                    name={`resource_expectedEndDate_${index}`}
                    value={resource.expectedEndDate}
                    onChange={handleChange}
                    className={`w-full border ${errors[`resource_expectedEndDate_${index}`] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Remarks</label>
                  <textarea
                    name={`resource_remarks_${index}`}
                    value={resource.remarks}
                    onChange={handleChange}
                    className={`w-full border ${errors[`resource_remarks_${index}`] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-150`}
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-end mt-4">
              <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-500 transition duration-150">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProjectForm;
