'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulate signup logic (you can replace this with an API call)
    setError('');
    alert('Signup successful! Redirecting to login...');
    router.push('/login'); // Redirect to login page after successful signup
  };

  return (
    <div className="flex  min-h-screen bg-white">
      {/* Left side with typing animation */}
      <div className="flex-1 flex justify-center items-center">
        <div className="text-4xl font-semibold text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="typing-animation">
            Welcome to <span className="text-blue-600">Splix Store :) hehe</span>
          </h1>
        </div>
      </div>

      {/* Right side signup form */}
      <div className="flex-1 bg-white flex justify-center items-center">
        <div className="bg-blue-50 text-black p-8 rounded-md shadow-md w-80">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSignup}>
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
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 mt-2 border rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">Or sign up with :)</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="bg-white border border-gray-300 p-2 rounded-full hover:bg-gray-200">
                <FaGoogle className="text-2xl text-blue-500" />
              </button>
              <button className="bg-white border border-gray-300 p-2 rounded-full hover:bg-gray-200">
                <FaApple className="text-2xl text-black" />
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="mt-6 text-center">
            <p className="text-gray-500">Already have an account?</p>
            <button
              onClick={() => router.push('/login')}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 mt-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
