import React from 'react';
import Sidebar from '../Sidebar';
// import ProductListing from '../../Pages/ClothingPage';
// import { products } from '../constantdata/data';
// import useFetchProducts from '../../hooks/fetchProductHook';
import { Outlet } from 'react-router-dom';

const Shops = () => {
  // const { data, loading, error } = useFetchProducts('http://localhost:3002/girls');
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default Shops;
