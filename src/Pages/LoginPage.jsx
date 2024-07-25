import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Contexts/UserContext';

import { useDispatch,useSelector } from 'react-redux';
import { login } from '../state/actions/LoginActions';

function LoginPage() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const {user,isLoading,error:loginError} = useSelector((state) => state.login);

    const { setUser } = useUser();

    if(user?._id){
      setUser(user)
      navigate('/')
    }
    if(loginError) {
      setError(loginError);
    }

  const handleSubmit = async (e) => {
      e.preventDefault();
      if(email === '' || password === ''){
        setError('Please fill all the fields');
        return;
      }
      dispatch(login({ email, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>
         
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-500">
          New Customer?<a className="text-blue-500 underline cursor-pointer" onClick={()=>navigate('/register')}>Start here</a>.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
