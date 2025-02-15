'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaApple } from 'react-icons/fa';
import AuthBT from '../components/ui/Auth-BT';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Dummy data for two users
  const users = [
    { email: 'client@flipkart.com', password: 'client123', role: 'client' },
    { email: 'admin@next.com', password: 'admin123', role: 'admin' },
  ];

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      if (user.role === 'client') {
        router.push('/'); // Redirect to product page for client
      } else if (user.role === 'admin') {
        router.push('/dashboard'); // Redirect to dashboard for admin
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left side with typing animation */}
      <div className="flex-1 flex justify-center items-center">
        <div className="text-4xl font-semibold text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="typing-animation">
            Welcome to <span className="text-blue-600">Ayurveda :) hehe</span>
          </h1>
        </div>
      </div>

      {/* Right side login form */}
      <div className="flex-1 bg-black flex justify-center items-center">
        <div className="bg-blue-50 text-black p-8 rounded-md shadow-md w-80">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 mt-2 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div type="submit" className='flex justify-center'>
              <AuthBT text="Login" />
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">Or login with :)</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="bg-white border border-gray-300 p-2 rounded-full hover:bg-gray-200">
                <FaGoogle className="text-2xl text-blue-500" />
              </button>
              <button className="bg-white border border-gray-300 p-2 rounded-full hover:bg-gray-200">
                <FaApple className="text-2xl text-black" />
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="mt-6 text-center">
            <p className="text-gray-500">Don't have an account?</p>
              <div type="submit" className='flex justify-center'
              onClick={() => router.push('/SignUp')}>

              <AuthBT text="Sign Up" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
