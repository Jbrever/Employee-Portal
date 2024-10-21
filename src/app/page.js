'use client'
import { useEffect, useState } from 'react';
import LoginPage from "@/components/Login";
import Signup from "@/components/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    toast.success("Successfully logged in!");
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    toast.info("You have logged out.");
  };

  return (
    <>
      {isLoggedIn === null ? (
        <div className="flex items-center justify-center h-screen text-white">Loading...</div>
      ) : isLoggedIn ? (
        <>
          <LoginPage onLogout={handleLogout} />
          <ToastContainer />
        </>
      ) : (
        <>
          <Signup onLogin={handleLogin} />
          <ToastContainer />
        </>
      )}
    </>
  );
}
