import React, { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom"; 
import SearchComponent from "./SearchComponent";
import { useUser } from "../Contexts/UserContext";
import CartIcon from "./CartIcon";
import WishListicon from "./WishListicon";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);


  const userDropdownRef = useRef(null);

  const navigate = useNavigate();
  const { user, setUser, handleLoginClick, handleSellerClick } = useUser();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    setUser(null);
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold text-black cursor-pointer" onClick={() => navigate("/")}>
            <span className="text-black">D</span>iwali{" "}
            <span className="text-black">s</span>hopping.
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              <ul className="flex space-x-6">
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => navigate("/shop")}
                >
                  Shop
                </li>
                <li
                  className="text-black hover relative cursor-pointer text-lg"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  Pages
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-0 w-40 bg-black border border-blue-500 shadow-lg z-50">
                      <ul className="py-1">
                        <li
                          className="cursor-pointer block px-4 py-2 text-white"
                          onClick={() => navigate("/about")}
                        >
                          About Us
                        </li>
                        <li
                          className="cursor-pointer block px-4 py-2 text-white"
                          onClick={() => navigate("/shop")}
                        >
                          Shop Details
                        </li>
                        <li
                          className="cursor-pointer block px-4 py-2 text-white"
                          onClick={() => navigate("/cart")}
                        >
                          Shopping Cart
                        </li>
                        <li
                          className="cursor-pointer block px-4 py-2 text-white"
                          onClick={() => navigate("/checkout")}
                        >
                          Check Out
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => navigate("/contactus")}
                >
                  Contacts
                </li>
              </ul>
            </div>
            <IoIosSearch
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={() => setSearchOpen(true)}
            />
            {/* <Badge badgeContent={wishlist.length} color="primary">
              <FcLike
                className="w-6 h-6 cursor-pointer"
                onClick={() => navigate("/wishlist")}
              />
            </Badge> */}
            {/* <Badge badgeContent={cart.length} color="primary">
              <AddShoppingCartIcon
                className="cursor-pointer"
                onClick={() => navigate("/cart")}
              />
            </Badge> */}
            <WishListicon/>
            <CartIcon/>
            {user?._id || user?.id ? (
              <>
                <div className="relative" ref={userDropdownRef}>
                  <span
                    className="hidden md:inline text-black cursor-pointer"
                    onClick={toggleUserDropdown}
                  >
                    {user?.name}
                  </span>
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg z-50">
                      <ul className="py-1">
                        <li
                          className="cursor-pointer block px-4 py-2 text-black hover:bg-gray-100"
                          onClick={() => navigate("/profile")}
                        >
                          Profile
                        </li>
                        <li
                          className="cursor-pointer block px-4 py-2 text-black hover:bg-gray-100"
                          onClick={() => navigate("/myorders")}
                        >
                          My Orders
                        </li>
                        <li
                          className="cursor-pointer block px-4 py-2 text-black hover:bg-gray-100"
                          onClick={handleLogout}
                        >
                          Log Out
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                className="bg-blue-500 w-24 h-10 rounded-lg text-white text-sm hidden md:inline"
                onClick={() => {
                  handleLoginClick();
                  navigate("/login");
                }}
              >
                Log In
              </button>
            )}
            <button
              className="bg-blue-500 w-24 h-10 rounded-lg text-white text-sm hidden md:inline"
              onClick={() => {
                handleSellerClick();
                navigate("/login");
              }}
            >
              Become a Seller
            </button>
            <button className="text-black md:hidden" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
            <div className="w-64 bg-white h-full shadow-lg p-4">
              <button className="text-black mb-4" onClick={toggleMenu}>
                ✕
              </button>
              <ul className="flex flex-col space-y-2 py-2 px-4">
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => handleMenuItemClick("/")}
                >
                  Home
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => handleMenuItemClick("/shop")}
                >
                  Shop
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => handleMenuItemClick("/about")}
                >
                  About Us
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => handleMenuItemClick("/shop")}
                >
                  Shop Details
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => handleMenuItemClick("/cart")}
                >
                  Shopping Cart
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => handleMenuItemClick("/checkout")}
                >
                  Check Out
                </li>
                <li
                  className="text-black hover:text-red-500 cursor-pointer text-lg"
                  onClick={() => handleMenuItemClick("/contactus")}
                >
                  Contacts
                </li>
                <div className="flex flex-col space-y-2 py-2">
                  {user?._id ? (
                    <>
                      <span className="text-black">{user?.name}</span>
                      <button
                        className="bg-red-500 w-24 h-8 rounded-lg text-white text-sm"
                        onClick={() => {
                          handleLogout();
                          toggleMenu();
                        }}
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <button
                      className="bg-blue-500 w-24 h-8 rounded-lg text-white text-sm"
                      onClick={() => {
                        handleLoginClick();
                        toggleMenu();
                        navigate("/login");
                      }}
                    >
                      Log In
                    </button>
                  )}
                  <button
                    className="bg-blue-500 w-24 h-10 rounded-lg text-white text-sm"
                    onClick={() => {
                      handleSellerClick();
                      toggleMenu();
                    }}
                  >
                    Become a Seller
                  </button>
                </div>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {searchOpen && <SearchComponent setSearchOpen={setSearchOpen} />}
    </>
  );
};

export default NavBar;
