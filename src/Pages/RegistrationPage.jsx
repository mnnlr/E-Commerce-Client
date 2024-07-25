    import axios from 'axios';
    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function RegistrationPage() {

        const navigate = useNavigate();

    //   const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }
    
        try {
           await axios.post('https://diwali-e-commerce-backend-n2a2.onrender.com/register', {
            name,
            email,
            password,
            confirmPassword
          });
          alert('user created')
          navigate('/login')
          // Redirect to login page or any other page upon successful registration
        } catch (error) {
            console.error('There was an error creating the user!', error);
            alert('Email Id already Registered');
          }
      };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Create Password
                </label>
                <input
                type={
                    showPassword ? "text" : "password"
                }
                id="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Create Password"
                required
                show
                />
                <label for="check">Show Password </label>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />  
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
                </label>
                <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm Password"
                required
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                Register
                </button>
            </div>
            </form>
            <p className="mt-6 text-center text-gray-500">
            Already have an account? <a className="text-blue-500 cursor-pointer" onClick={()=>navigate('/login')}>Log in here</a>.
            </p>
        </div>
        </div>
    );
    }

    export default RegistrationPage;
