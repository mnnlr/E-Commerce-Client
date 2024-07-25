import useFetch from "./hooks/fetchhook"

const CartData = () => {
    const [{apiData}]=  useFetch('cart');
    console.log('this is apiData', apiData);
}

export {CartData}