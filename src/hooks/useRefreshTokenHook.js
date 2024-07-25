import customAxios from '../customAxios/authAxios';
import {useAuth} from '../contextData/useAuth';

const useRefreshToken = () => {

    const {setAuth} = useAuth();

    const refresh = async() => {
        const response = await customAxios.get('/api/v1/refresh-token',{
            withCredentials:true,
        });

        setAuth(prev=>{
            return {...prev,accessToken:response.data.accessToken}
        })

        return response.data.accessToken;

    }

    return refresh;

}

export default useRefreshToken;