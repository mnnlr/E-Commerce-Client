import axios from "axios";

 const handleAddToCart = async (e, datum, setNotification, user,setCart) => {
  const {rest,_id: productid, quantity=1} = datum;

    e.stopPropagation();
  if (!user) {
    setNotification 
    &&
    setNotification('User Not Login')
    return;
  }
  
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${user?.token}`
    };

    try {
      const {data,status} = await axios.post(`https://diwali-e-commerce-backend-n2a2.onrender.com/cart`, {}, { params: { id: productid, quantity }, headers });
      console.log('data : ',data,'status : ',status)
      if(status === 200){
        setCart((prev)=>{
          console.log('prev : ',prev)
          return [...prev,datum]
        })
        setNotification &&
      setNotification("Item added to cart!");
      }

    } catch (error) {
     setNotification &&
     setNotification(error?.response?.data?.message)
    }
  };
  
  const handleUpdateCart = async (e, {id: productid, quantity=1}, setNotification, user) => {
    e.stopPropagation();
    if (!user) {
      setNotification 
      &&
      setNotification('User Not Login')
      return;
    }
    
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${user?.token}`
    };
    
    try {
      await axios.put(`https://diwali-e-commerce-backend-n2a2.onrender.com/cart`, {}, { params: { id: productid, quantity }, headers });
      // addToCart({ productid });
      setNotification &&
      setNotification("Item added to cart!");
    } catch (error) {
      setNotification &&
      setNotification(error?.response?.data?.message)
    }
  };
  

export {handleAddToCart, handleUpdateCart};