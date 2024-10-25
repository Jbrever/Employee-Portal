'use client';
import React, { useEffect, useState } from 'react';
import { getAllEmployee } from '@/_services/services_api';
import { EmployeeTable } from '@/components/utils/table';

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

            <div className="w-full shadow-sm rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Employee List
                </h1>
                <div className="overflow-x-auto" >
                    <EmployeeTable data={employeeList} />
                </div>
                
            </div>

    );
}
