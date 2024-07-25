
import { createContext, useState,useContext, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(" ");
  const [adminuser, setAdminuser] = useState({ role: 'seller' });
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isSellerClicked, setIsSellerClicked] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSetUser = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  };


  const handleLoginClick = () => {
    setIsLoginClicked(true);
    setIsSellerClicked(false);
    // navigate('/login');
    console.log('login click', isLoginClicked);
  };

  const handleSellerClick = () => {
    setIsSellerClicked(true);
    setIsLoginClicked(false);
    // navigate('/login');
    console.log('become a seller click', isSellerClicked);
  };

  return (
    <UserContext.Provider value={{  user, 
      setUser: handleSetUser, 
      adminuser, 
      setAdminuser, 
      handleLoginClick, 
      handleSellerClick,
      isLoginClicked,
      isSellerClicked}}>
      {children}
    </UserContext.Provider>
  );
};

const   useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}


export {UserProvider,useUser, UserContext};
