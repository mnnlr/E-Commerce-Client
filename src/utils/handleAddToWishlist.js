import axios from "axios";

const handleAddToWishlist = async (
  e,
  { id: productid },
  setNotification,
  user,
) => {
    e.stopPropagation();
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    };
    const { data, status } = await axios.put(
      `https://diwali-e-commerce-backend-n2a2.onrender.com/wishlist`,
      {},
      { params: { id: productid }, headers }
    );

    if (status === 200) {
      setNotification("item add to wishlist");
      // console.log("item add to wishlist");
    } else{
      console.log("error on add to cart");
    }
  } catch (error) {
    setNotification(error.response.data.message);
  }
};

export { handleAddToWishlist };
