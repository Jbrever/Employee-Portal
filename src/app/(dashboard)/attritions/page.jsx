'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faCalendar, faBuilding, 
  faCode, faClipboardList 
} from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Form } from 'react-bootstrap';

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen container-fluid p-4">
      <Card className="w-full ">
        <Card.Body>
          <Card.Title className="text-xl font-bold mb-4">Employee Attrition</Card.Title>
          <Form onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <Form.Group controlId="employeeName">
                <Form.Label>
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Employee Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee name"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="grade">
                <Form.Label>
                  <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
                  Grade
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="branch">
                <Form.Label>
                  <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                  Branch
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="department">
                <Form.Label>
                  <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
                  Department
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <Form.Group controlId="designation">
                <Form.Label>
                  <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
                  Designation
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="division">
                <Form.Label>Division</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter division"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="unit">
                <Form.Label>Unit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <Form.Group controlId="project">
                <Form.Label>Project</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="birthDate">
                <Form.Label>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  Birth Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="employeeCode">
                <Form.Label>Employee Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee code"
                  name="employeeCode"
                  value={formData.employeeCode}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="joiningDate">
                <Form.Label>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  Joining Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <Form.Group controlId="confirmationDate">
                <Form.Label>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  Confirmation Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="confirmationDate"
                  value={formData.confirmationDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="resignOfferDate">
                <Form.Label>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  Resign Offer Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="resignOfferDate"
                  value={formData.resignOfferDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="employeeStatus">
                <Form.Label>Employee Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee status"
                  name="employeeStatus"
                  value={formData.employeeStatus}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="resignDate">
                <Form.Label>Resign Date</Form.Label>
                <Form.Control
                  type="date"
                  name="resignDate"
                  value={formData.resignDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <Form.Group controlId="leftDate">
                <Form.Label>Left Date</Form.Label>
                <Form.Control
                  type="date"
                  name="leftDate"
                  value={formData.leftDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="reasonOfLeaving">
                <Form.Label>Reason of Leaving</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter reason for leaving"
                  name="reasonOfLeaving"
                  value={formData.reasonOfLeaving}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            <Button variant="primary" type="submit" className="w-2xl px-4">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
