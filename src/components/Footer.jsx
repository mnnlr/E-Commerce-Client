import React from "react";
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col md:flex-row md:space-x-36 p-8 md:p-32">
          <div className="mb-8 md:mb-0">
            <h1 className="font-bold text-3xl text-white">Diwali Shopping</h1>
            <p className="text-lg text-white mt-4 md:mt-7">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h6 className="font-bold text-xl text-white">Shopping</h6>
            <ul className="text-lg text-white mt-4 md:mt-7 space-y-2">
              <li>Crakers</li>
              <li>Trending</li>
              <li>You know</li>
              <li>Sale</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h6 className="font-bold text-xl text-white">Shopping</h6>
            <ul className="text-lg text-white mt-4 md:mt-7 space-y-2">
              <li>Contact Us</li>
              <li>Payment Methods</li>
              <li>Delivery</li>
              <li>Return & Exchanges</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h6 className="font-bold text-xl text-white">Newsletter</h6>
            <p className="text-lg text-white mt-4 md:mt-7">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            {/* Uncomment the form if needed */}
            {/* <form action="#">
              <input type="text" placeholder="Your email" className="mt-4 p-2 w-full md:w-auto" />
              <button type="submit" className="mt-4 md:mt-0 md:ml-2 p-2 bg-red-500 text-white">Subscribe</button>
            </form> */}
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="text-white flex items-center justify-center mb-8">
          <p className="flex flex-col md:flex-row items-center">
            Copyright © 2024 All rights reserved | This template is made with
            <FcLike className="mx-1" /> by <span className="text-red-500">Colorlib</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
