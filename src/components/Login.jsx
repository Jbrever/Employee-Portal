'use client';
import { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { loginAPIMethod } from '@/_services/services_api';
import { useRouter } from 'next/navigation';
import {  Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  useEffect(() => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('auth-token');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the payload
    const payload = {
      email,
      password,
    };

    loginAPIMethod(payload)
      .then(response => {
        console.log('API response:', response);
        if (response.status === 1) {
          localStorage.setItem('userDetails', JSON.stringify(response.data.user));
          localStorage.setItem('auth-token', response.data.token);
          toast.success(response.message)
          router.push('/dashboard');
        } else {
       toast.error(response.message)
        }
      })
      .catch(error => {
        console.error('API error:', error);
        toast.error(response.message)
      });

    console.log('Login attempt with:', payload);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EEF2FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#E0E7FF" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="glow1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <circle cx="200" cy="200" r="300" fill="url(#glow1)" opacity="0.4" />
          <circle cx="800" cy="800" r="400" fill="url(#glow1)" opacity="0.3" />
          <path d="M0 300 Q 400 350, 1000 200" stroke="#6366F1" strokeWidth="1" fill="none" opacity="0.1" />
          <path d="M0 400 Q 500 450, 1000 300" stroke="#6366F1" strokeWidth="1" fill="none" opacity="0.1" />
          <path d="M0 500 Q 600 550, 1000 400" stroke="#6366F1" strokeWidth="1" fill="none" opacity="0.1" />
        </svg>
      </div>

      {/* Login Container */}
      <div className="w-full max-w-md relative">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Employee Portal</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-indigo-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg 
                           bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                           transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-indigo-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg 
                           bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                           transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg
                       text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                       transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
  
    </div>
  );
};

export default LoginPage;
