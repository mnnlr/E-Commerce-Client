import React from 'react';
import { useNavigate } from 'react-router-dom';
import crackerImage from '../assets/Cracker_Assets/4feet-twinkling-stars.jpg';
import crackerImage2 from '../assets/Cracker_Assets/30-shots.jpg';
// import crackerImage3 from '../../assets/Cracker_Assets/Bombs.jpg';

const CollectionsGrid = () => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate('/shop');
  };

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <img src={crackerImage} alt="Clothing Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl font-semibold mb-2">Crackers Collections 2024</h3>
            <button
              onClick={navigateToShop}
              className="underline"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative group">
          <img src={crackerImage2} alt="Shoes Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl font-semibold mb-2">Bomb 2024</h3>
            <button
              onClick={navigateToShop}
              className="underline"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        {/* <div className="relative group">
          <img src={crackerImage3} alt="Accessories Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl font-semibold mb-2">All items</h3>
            <button
              onClick={navigateToShop}
              className="underline"
            >
              SHOP NOW
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CollectionsGrid;
