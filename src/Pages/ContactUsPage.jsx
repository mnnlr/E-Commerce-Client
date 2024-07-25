import React, { useState } from 'react';
import axios from 'axios';


const ContactUs = () => {
  const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/contact', { name, email, message})
      .then(response => {
        if (response.data.success) {
         alert(`Data submited succenfully`)
        } else {
          console.log('Failed to submit contact:', response.data.error);
        }
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-2 text-left text-sm text-gray-600">
              diwali celebration
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">India</h3>
            <p className="text-sm text-gray-600">xxxx</p>
            <p className="text-sm text-gray-600">xxxxx</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">other countery</h3>
            <p className="text-sm text-gray-600">xxxx</p>
            <p className="text-sm text-gray-600">xxxxxx</p>
          </div>
        </div>
        <div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text"  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}/>
              </div>
            </div>
            <div>
              <button type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
