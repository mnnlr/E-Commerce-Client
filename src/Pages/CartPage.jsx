import { useCart } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useUser } from "../Contexts/UserContext";
// import { handleUpdateCart } from "../utils/handleAddtoCart";

import { useDispatch,useSelector } from "react-redux";
import { removeFromCart,UpdateCart } from "../state/actions/CartActions";

const CartList = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { setCart } = useCart();  
  const { user } = useUser();

  const {cart} = useSelector((state) => state.cart);
  console.log('this is a cart from cartlist',cart)
  
  const totalAmount =
    cart?.reduce((acc, product) => {
      const quantity = product?.quantity;
      return acc + product?.productId?.price * quantity;
    }, 0) || 0;

    const buyNow = () => {
      navigate("/checkout", { state: { totalItems: cart?.length, totalAmount } });
    };

    const handleRemoveFromCart = async (e, productId) => {
      if (user) {
        dispatch(removeFromCart({productId,token:user?.token}))
      }
    };

    const handleUpdateCart = async (e, product) => {
      e.preventDefault()
      if (user) {
        console.log('this is a product to update',product)
        dispatch(UpdateCart({id:product.id,quantity:product.quantity,token:user?.token}))
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Your Cart</h2>
        </div>
        {cart?.length === 0 ? (
          <div className="text-center mt-6">
            <h3 className="text-2xl text-gray-700">Your Cart is Empty Now</h3>
            <button
              className="bg-blue-500 text-white w-48 h-12 rounded-lg mt-6 hover:bg-blue-600"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Product</h2>
              <h2 className="text-xl font-semibold">Quantity</h2>
              <h2 className="text-xl font-semibold">Total</h2>
            </div>
            {cart?.map((product) => {
              const totalPerItem = product?.productId?.price * product?.quantity;
              return (
                <div
                  key={product._id}
                  className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg"
                >
                  <div
                    className="flex items-center space-x-4"
                    onClick={() =>
                      navigate(`/product-details/${product.productId._id}`)
                    }
                  >
                    <img
                      src={product?.productId?.images[0]}
                      alt={product?.productId?.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {product?.productId?.name}
                      </h3>
                      <span className="text-gray-700">
                        {product?.productId?.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={(e) => {
                        const Quantity = product?.quantity - 1;
                        handleUpdateCart(
                          e,
                          { id: product?.productId?._id, quantity: Quantity },
                          "",
                          user
                        );
                        setCart((prevCart)=>([...prevCart, product]))
                      }}
                      
                    >
                      <FaArrowLeft className="cursor-pointer text-gray-500 hover:text-gray-700" />
                    </button>
                    <p className="text-lg font-bold">{product?.quantity}</p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const Quantity = product?.quantity + 1;
                        handleUpdateCart(
                          e,
                          { id: product?.productId?._id, quantity: Quantity },
                          "",
                          user
                        );
                        setCart((prevCart)=>([...prevCart, product]))
                      }}
                      
                    >
                      <FaArrowRight className="cursor-pointer text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-bold">{totalPerItem}</p>
                    <button
                      onClick={(e) =>{
                        e.stopPropagation();
                        handleRemoveFromCart(e, product?.productId?._id)
                      }}
                      className="text-red-500 hover:text-red-700 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-semibold">Total Items: {cart?.length}</p>
              <p className="text-xl font-semibold">
                Total Price: {totalAmount}
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <button
                className="bg-blue-500 text-white w-48 h-12 rounded-lg mt-6 hover:bg-blue-600 mb-4"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
              <button
                className="bg-red-500 text-white w-48 h-12 rounded-lg mt-6"
                onClick={buyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
