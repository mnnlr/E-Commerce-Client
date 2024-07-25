import { useState, useEffect } from 'react';
import { useUser } from '../Contexts/UserContext';
// import { defaultAxios } from '../custom_axios/custom_axios';
import axios from 'axios';
const useFetch = (path,options={}) => {
    const {skip} = options;
    const [getData, setData] = useState({isLoading:false,apiData:undefined,status:null,serverError:null});
    const [Params,setParams] = useState('')
    const {user} = useUser();
    // console.log('this is a user', user);
  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    if(skip){
        return;
      }

    const fetchData = async () => {
      try {

        const {data,status} = await axios.get(`https://diwali-e-commerce-backend-n2a2.onrender.com/${path}`,{
                    signal: controller.signal,
                    params: Params,
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user?.token}`
                    },
                });
        
            if (isMounted) {

                setData(prev => ({...prev,isLoading:false,apiData:data,status:status}));
      
            }
      
        } catch (error) {
            console.log(error)
            setData(prev => ({...prev,isLoading:false,serverError:error}))      
        } finally {
       
            setData(prev => ({...prev,isLoading:false}))
      
        }
    };

    fetchData();

    return () => {
        controller.abort();
        isMounted = false;
    };
  }, [path,Params,skip,user?.token]);

  return [getData,setData,setParams,Params];
};

export default useFetch;