import React from 'react';
import Carousel from '../components/Carousel';
import CollectionsGrid from '../components/CollectionsGrid';
import CarouselSecond from '../components/CarouselSecond';
import banner1 from '../assets/Cracker_Assets/Hero-image.jpg';
import banner2 from '../assets/Cracker_Assets/price-List.jpg';

const Home = () => {
  const images = [
    banner1,
    banner2,
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        <Carousel />
        <CollectionsGrid />
        <CarouselSecond images={images} />
      </div>
    </>
  );
};

export default Home;
