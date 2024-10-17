'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-xl font-bold">Employee Management</h1>
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
          <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white border rounded shadow-lg z-10">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
            <a href="/" className="block px-4 py-2 hover:bg-gray-700">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
