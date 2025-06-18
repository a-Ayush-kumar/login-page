'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleCreateUser = () => {
    router.push('/sign-up'); // Navigate to your user creation page
  };

  const handleLogin = () => {
    router.push('/sign-in'); // Navigate to your login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="bg-white h-[90vh] rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col justify-end">
    <div>
      <h1 className="text-2xl text-black font-bold mb-4">Welcome to PopX</h1>
      <p className="text-gray-600 mb-6 text-[1.5rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="flex flex-col gap-4">
        <button
          onClick={handleCreateUser}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
        >
          Create Account
        </button>
        <button
          onClick={handleLogin}
          className="bg-purple-200 hover:bg-purple-300 text-black font-semibold py-2 px-4 rounded"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

