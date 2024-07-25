import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const {user} = useUser();

  const sessionId = JSON.parse( localStorage.getItem('sessionId') );
  console.log('this is sessionId', sessionId)

  const successfulPayment = async () => {
    try{

      const Data =
        {
          sucess: true,
          sessionId: sessionId,
        }
      
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user?.token}`
    };

    const { data, status} = await axios.post(
      "https://diwali-e-commerce-backend-n2a2.onrender.com/order/make-payment", Data, {headers}
    );
    console.log('this is reponse', data)
    if(status=== 200){
    localStorage.removeItem('sessionId')
    }

  }catch(error){
    console.log('this is error', error)
  }
  };

  useEffect(()=>{
    if(user?.token){
      successfulPayment();
    }
  }, [user?.token])
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your transaction has been completed
          successfully.
        </p>
        <div className="flex justify-center">
          <p
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
            onClick={() => navigate("/")}
          >
            Go to Home
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
