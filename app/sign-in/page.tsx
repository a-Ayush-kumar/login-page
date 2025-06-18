'use client';

import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Replace with real sign-in logic
    alert(`Logging in with ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white h-[90vh] rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col justify-end">
        <div>
          <h1 className="text-2xl text-black font-bold mb-4">Welcome to PopX</h1>
          <p className="text-gray-600 mb-6 text-[1.35rem]">
            Sign in to your account to continue.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSignIn}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
