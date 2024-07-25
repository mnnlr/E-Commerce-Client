import React, { useEffect, useState } from "react";
import Product from "../components/ClothingCard";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProductListing = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const { status, data } = await axios.get(
        "https://diwali-e-commerce-backend-n2a2.onrender.com/clothing",
        { params: { categoryName: state?.parameter }, headers }
      );
      if (status === 200) {
        setData(data.Data);
        console.log("this is clothing data", data);
      }
    } catch (err) {
      console.error("this is error", err);
    }
  };

  useEffect(() => {
    if (state?.parameter) {
      getData();
    }
  }, [state?.parameter]);

  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 &&
          data?.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/product-details/${product._id}`)}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <Product
                Datum = {product}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductListing;
