'use client'
import React from 'react';
import { useRouter } from 'next/navigation'; 
import ProjectTracker from '@/components/ProjectTracker';

export default function Page() {
  const router = useRouter(); 

  const handleRedirect = () => {
    router.push('/projectTracker'); 
  };

  return (
    <div className="pt-3 flex flex-col">
      <div className="flex justify-end mb-4"> {/* Flex container for right alignment */}
        <button 
          onClick={handleRedirect} 
          className="px-3 me-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Project
        </button>
      </div>
      
      <div>
        <ProjectTracker />
      </div>
    </div>
  );
}
