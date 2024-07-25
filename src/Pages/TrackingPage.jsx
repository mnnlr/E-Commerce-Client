import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

const TrackingPage = () => {
  const [orderData, setOrderData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getTrackingDetails() {
      try {
        const trackingDetails = await axios.post("http://localhost:3002/track", {id})
        console.log(trackingDetails.data);
        setOrderData(trackingDetails.data);
      } catch (error) {
        console.log('something went wrong', error);
      }
    }
    getTrackingDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center p-4">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <FaBoxOpen className="text-orange-500 text-6xl" />
        </div>
        <h2 className="text-center text-xl font-bold mb-4">
          Tracking Number: {id}
        </h2>
        <ul className="space-y-4">
          {orderData.map((status, index) => (
            <li key={index} className="flex items-center space-x-4">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <div>
                <h3 className="font-bold">{status.eventDescription}</h3>
                <p className="text-gray-300">{status.city || 'FedEx'}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackingPage;
