'use client';
import React, { useEffect, useState } from 'react';
import { getAllEmployee } from '@/_services/services_api';

export default function Page() {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await getAllEmployee();
                setEmployeeList(response.data); // Assuming response is the employee data
                console.log(response, "responseresponseresponse");
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employeeList && employeeList.map((employee, index) => (
                    <li key={index}>{employee.firstName}</li> // Adjust the property based on your data structure
                ))}
            </ul>
        </div>
    );
}
