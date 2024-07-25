import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/HomePage';
import Shops from './components/shop/Shops';
import { CartProvider } from './Contexts/CartContext';
import ContactUs from './Pages/ContactUsPage';
import AboutUs from './Pages/AboutUsPage';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import CheckoutForm from './components/cheakoutform/CheckoutForm';

import PaymentSuccess from './components/payment/PaymentSucess';
import PaymentCancel from './components/payment/PayementCancel';
import Seller from './components/shop/Seller';
import Wishlist from './Pages/WishlistPage';
import ProductDetails from './Pages/ProductDettails';
import TrackingPage from './Pages/TrackingPage';
import ProductListing from './Pages/ClothingPage';
import ProductList from './Pages/Productcard';
import CartList from './Pages/CartPage';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow container mx-auto mt-4">
          <Routes>
              <Route path="/" element={<Home/>} />
            <Route path="shop" element={<Shops />}>
              <Route index element={<ProductListing/>} />
            </Route>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<CartList/>} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            
            <Route path="/shop/seller" element={<Seller/>} />
            <Route path="/success" element={<PaymentSuccess/>} />
            <Route path="/cancel" element={<PaymentCancel/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/product-details/:id" element={<ProductDetails/>} />
            <Route path="/myorders" element={<ProductList />} />
            <Route path="/track/:id" element={<TrackingPage/>} />
           
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
