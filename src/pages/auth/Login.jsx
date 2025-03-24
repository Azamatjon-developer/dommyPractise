import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../../store/slice/authSlice'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const dispatch = useDispatch()




  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, expiresInMins: 30 }),
      });

      const data = await response.json();

      if (response.ok) {
        
        console.log('Login successful:', data);
        alert('Login muvaffaqiyatli!');
        dispatch(login(data.accessToken))
      } else {
        setError(data.message || 'Login xatosi');
      }
    } catch (error) {
      setError('Tarmoq xatosi');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleLogin} 
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
