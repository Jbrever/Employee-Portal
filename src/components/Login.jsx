'use client';
import { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { loginAPIMethod } from '@/_services/services_api';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
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
    const payload = { email, password };

    loginAPIMethod(payload)
      .then(response => {
        if (response.status === 1) {
          localStorage.setItem('userDetails', JSON.stringify(response.data.user));
          localStorage.setItem('auth-token', response.data.token);
          toast.success(response.message);
          router.push('/dashboard');
        } else {
          toast.error(response.message);
        }
      })
      .catch(error => {
        console.error('API error:', error);
        toast.error(response.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
      </div>

      <div className="relative w-full max-w-md px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="px-8 pt-8 pb-6 text-center bg-gradient-to-b from-gray-50">
            <User className="mx-auto h-12 w-12 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
          </div>

          {/* Form Section */}
          <div className="p-8 pt-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-purple-500" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl
                             text-gray-900 placeholder-gray-400
                             focus:ring-purple-500 focus:border-purple-500
                             transition duration-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-purple-500" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl
                             text-gray-900 placeholder-gray-400
                             focus:ring-purple-500 focus:border-purple-500
                             transition duration-200"
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

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-white text-sm font-semibold
                         bg-gradient-to-r from-purple-600 to-blue-600
                         hover:from-purple-700 hover:to-blue-700
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                         transform transition duration-200 hover:scale-[1.02]"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default LoginPage;