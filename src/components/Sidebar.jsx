import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, useUser } from '../Contexts/UserContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { adminuser } = useContext(UserContext);
  const { user } = useUser();

  const [isKidsDropdownOpen, setIsKidsDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);

  const toggleKidsDropdown = () => {
    setIsKidsDropdownOpen(!isKidsDropdownOpen);
  };

  const toggleMenDropdown = () => {
    setIsMenDropdownOpen(!isMenDropdownOpen);
  };

  const toggleWomenDropdown = () => {
    setIsWomenDropdownOpen(!isWomenDropdownOpen);
  };

  return (
    <div className="w-1/4 border-r sticky top-0 left-0 h-screen overflow-y-auto bg-white">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 border rounded"
        />
      <div className="mb-8">
      </div>
        <h3 className="font-bold mb-2">Categories</h3>
        <ul>
          <li className="my-2">
            <div onClick={toggleMenDropdown} className="cursor-pointer text-gray-700 hover:text-gray-900 flex justify-between items-center">
              <span onClick={() => navigate('/shop', {state: {parameter: [ "Men", "Clothing"]}})}>Men</span>
              <svg className={`w-4 h-4 transition-transform ${isMenDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            {isMenDropdownOpen && (
              <ul className="ml-4 mt-2">
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ["Ethnic", "Men", "Clothing", "Kurta"]}})}>Kurta</a>
                </li>
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ["Ethnic", "Men", "Clothing", "Pajama"]}})}>Pajama</a>
                </li>
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ["Ethnic", "Men", "Clothing", "Sets", "Sherwani"]}})}>Sherwani</a>
                </li>
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ["Ethnic", "Men", "Clothing", "Ethnic Sets"]}})}>Ethnic Wear</a>
                </li>
              </ul>
            )}
          </li>
          <li className="my-2">
            <div onClick={toggleWomenDropdown} className="cursor-pointer text-gray-700 hover:text-gray-900 flex justify-between items-center">
              <span onClick={() => navigate('/shop', {state: {parameter: ['Clothing','Ethnic','Women',"Girl"]}})}>Women</span>
              <svg className={`w-4 h-4 transition-transform ${isWomenDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            {isWomenDropdownOpen && (
              <ul className="ml-4 mt-2">
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ['Clothing','Ethnic','Women',"Girl",'Kurta&Kurtis']}})}>Kurta & Kurti</a>
                </li>
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ['Clothing','Ethnic','Women',"Girl",'Lehnga Choli']}})}>Lehnga & Choli</a>
                </li>
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ['Clothing','Ethnic','Women',"Girl",'Saree']}})}>Saree</a>
                </li>
              </ul>
            )}
          </li>
          <li className="my-2">
            <div onClick={toggleKidsDropdown} className="cursor-pointer text-gray-700 hover:text-gray-900 flex justify-between items-center">
              <span onClick={() => navigate('/shop', {state: {parameter: ["Ethnic", "Kids", "Clothing", "Sets","Ethnic Sets"]}})}>Kids</span>
              <svg className={`w-4 h-4 transition-transform ${isKidsDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            {isKidsDropdownOpen && (
              <ul className="ml-4 mt-2">
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ["Ethnic", "Kids" , "Boy" , "Clothing", "Sets","Ethnic Sets"]}})}>Boys</a>
                </li>
                <li className="my-2">
                  <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop', {state: {parameter: ["Ethnic", "Kids" , "Girl" , "Clothing", "Sets","Ethnic Sets"]}})}>Girls</a>
                </li>
              </ul>
            )}
          </li>
          {adminuser?.role === user?.role && (
            <li className="my-2">
              <a className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => navigate('/shop/seller')}>Seller</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
