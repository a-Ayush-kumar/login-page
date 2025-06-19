'use client';

import { useState, ChangeEvent } from 'react';

interface SignUpForm {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  company: string;
  optedIn: 'yes' | 'no' | '';
}

export default function SignUpPage() {
  const [form, setForm] = useState<SignUpForm>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    company: '',
    optedIn: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value: 'yes' | 'no') => {
    setForm((prev) => ({ ...prev, optedIn: value }));
  };

  const handleSubmit = () => {
    // You can replace this with real logic or an API call
    alert(`Signing up ${form.fullName} with email ${form.email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white h-[90vh] rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col justify-end">
        <div>
          <h1 className="text-2xl text-black font-bold mb-4">Welcome to PopX</h1>
          <p className="text-gray-600 mb-6 text-[1.35rem]">
            Create your account to get started.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded"
            />

            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Would you like to receive company updates?
              </p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="optedIn"
                    value="yes"
                    checked={form.optedIn === 'yes'}
                    onChange={() => handleCheckbox('yes')}
                    className="accent-purple-600"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="optedIn"
                    value="no"
                    checked={form.optedIn === 'no'}
                    onChange={() => handleCheckbox('no')}
                    className="accent-purple-600"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
