'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const redirectHome = () => {
    router.push("/notes");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a test login. It will be updated once DB Has been setup
    if (username === 'test' && password === 'password') {
      redirectHome();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 w-screen text-black absolute z-16">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg h-80 w-96 flex justify-evenly flex-col items-center">
        <h1 className="text-2xl font-bold mb-1">Task Assistant</h1>
        <h1 className="text-2xl mb-1">User Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 mt-4 text-gray-600 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mt-2 mb-4 text-gray-600 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
}
