import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { useUser } from '../../Contexts/UserContext';


const MakePayment = ({totalAmount, totalItems, formData}) => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
    const {user} = useUser();

   
    const makePayment = async () => {
        try {
          const stripe = await stripePromise;
    
          const body = {
            recepientDetails: formData
          };
          console.log('Request body:', body);
          const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user?.token}`
          };
    
          // const {data, status}= await axios.post('https://diwali-e-commerce-backend-n2a2.onrender.com/order/saveorder', body, { headers });
          const {data, status}= await axios.post('http://localhost:8000/order/saveorder', body, { headers });
    
          console.log('this is data', data)
          if (status !== 200) {
            console.error('Failed to save order:', status)       
                 return;
          }
    

          if(status===200){
            localStorage.setItem("sessionId", JSON.stringify(data?.Data?.id));
         }

          console.log('Received session:', data?.Data?.id);
    
          if (!data?.Data?.id) {
            console.error('Invalid session data:', data);
            return;
          }
    
          const result = await stripe.redirectToCheckout({
            sessionId: data?.Data?.id
          });
    
          if (result.error) {
            console.error('Stripe checkout error:', result.error);
          }
        } catch (error) {
          console.error('Error making payment:', error);
        }
      };
    return (
    <div className="w-full max-w-sm bg-gray-50 shadow-md rounded-lg p-6 ml-10">
            <h2 className="text-2xl font-semibold">Your Order</h2>
            <ul className="mt-4 space-y-2">
            
            </ul>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-black text-white p-2 rounded-md" onClick={makePayment}>Place Order</button>
          </div>
  )
}

export default MakePayment