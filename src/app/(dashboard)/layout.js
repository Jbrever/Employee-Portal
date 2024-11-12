'use client'
import { useState, useEffect } from 'react';
import Header from '@/components/Haader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faUser, 
  faClipboardList, 
  faSignOutAlt,
  faBars,
  faChevronDown,
  faBuilding,
  faProjectDiagram,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
const menuOptions = [
  { label: 'Dashboard', icon: faTachometerAlt, url: '/dashboard' },
  { label: 'HRIS', icon: faBuilding, url: '#', hasDropdown: true },
  { label: 'Leaves', icon: faCalendarAlt, url: '/leaves' },
  { label: 'Employee', icon: faUser, url: '/employee' },
  { label: 'Project Tracker', icon: faProjectDiagram, url: '/projectList' },
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
          w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white
          shadow-xl border-r border-slate-700/50
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center h-20 px-6 border-b border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold">N</span>
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Now A Wave
              </h2>
              <p className="text-xs text-indigo-200">Employee Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 mt-8 space-y-2">
          {menuOptions.map((option, index) => {
            const isActive = currentPath === option.url;

            if (option.hasDropdown) {
              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 text-sm rounded-xl
                      transition-all duration-200 group
                      ${isActive ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                    `}
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon 
                        icon={option.icon} 
                        className={`w-5 h-5 mr-3 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                      />
                      <span className="font-medium">{option.label}</span>
                    </div>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`w-4 h-4 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isProfileDropdownOpen && (
                    <div className="mt-2 ml-4 py-2 px-3 bg-white/5 rounded-xl backdrop-blur-sm">
                      {profileDropdownOptions.map((dropdownOption, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownOption.url}
                          className="flex items-center px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
                        >
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
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
                  flex items-center px-4 py-3 text-sm rounded-xl
                  transition-all duration-200 group
                  ${isActive ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'}
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
      
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50 shadow-lg">
          <div className="h-full px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
              </button>
              <Header />
            </div>
            
            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200">
                Quick Action
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
        <Toaster/>
      </main>
    </div>
  );
}