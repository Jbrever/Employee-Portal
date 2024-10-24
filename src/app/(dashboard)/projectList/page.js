'use client'
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import ProjectTracker from '@/components/ProjectTracker';

export default function Page() {
  const router = useRouter(); // Initialize useRouter

  const handleRedirect = () => {
    router.push('/projectTracker'); // Redirect to /projectTracker
  };

  return (
    <div className='py-3 flex'>

      <button 
        onClick={handleRedirect} 
        className="  px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 justify-end ml-auto "
      >
    Add New Project
      </button>
    </div>
  );
}
