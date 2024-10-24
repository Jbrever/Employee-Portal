'use client'
import { useState, useEffect } from 'react';
import Header from '@/components/Haader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faUser, 
  faClipboardList, 
  faSignOutAlt,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const menuOptions = [
  { label: 'Dashboard', icon: faTachometerAlt, url: '/dashboard' },
  { label: 'HRIS', icon: faUser, url: '#', hasDropdown: true },
  { label: 'Leaves', icon: faClipboardList, url: '/leaves' },
  { label: 'Employee', icon: faClipboardList, url: '/employee' },
  { label: 'project Tracker', icon: faClipboardList, url: '/projectList' },
  { label: 'Logout', icon: faSignOutAlt, url: '/' },
];

const profileDropdownOptions = [
  { label: 'Employee Master', url: '/profile' },
  { label: 'Attrition', url: '/attritions' },
  { label: 'Transfer Employee', url: '/transferEmployee' },
  { label: 'EIC Doc', url: '/attritions' },
];

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Menu Overlay */}
      {!isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-64 bg-gray-800 text-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center h-16 px-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">N</span>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Now A Wave
            </h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 mt-6 space-y-1">
          {menuOptions.map((option, index) => {
            const isActive = currentPath === option.url;

            if (option.hasDropdown) {
              return (
                <div key={index}>
                  <a
                    href={option.url}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsProfileDropdownOpen(!isProfileDropdownOpen);
                    }}
                    className={`
                      flex items-center px-4 py-3 text-sm rounded-lg
                      transition-all duration-200 group
                      ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    `}
                  >
                    <FontAwesomeIcon 
                      icon={option.icon} 
                      className={`w-5 h-5 mr-3 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                    />
                    <span className="font-medium">{option.label}</span>
                  </a>
                  {isProfileDropdownOpen && (
                    <div className="ml-6 mt-2 bg-gray-700 rounded-lg">
                      {profileDropdownOptions.map((dropdownOption, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownOption.url}
                          className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white`}
                        >
                          {dropdownOption.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={index}
                href={option.url}
                className={`
                  flex items-center px-4 py-3 text-sm rounded-lg
                  transition-all duration-200 group
                  ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                `}
              >
                <FontAwesomeIcon 
                  icon={option.icon} 
                  className={`w-5 h-5 mr-3 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                />
                <span className="font-medium">{option.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full overflow-hidden">
              <img 
                src="/api/placeholder/32/32" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 ">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
          </button>
          <Header />
        </header>

        {/* Page Content */}
        <div className='d-flex justify-center'>
          {children}
        </div>
      </main>
    </div>
  );
}
