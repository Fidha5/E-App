import axios from 'axios';

const USER_URL = "https://server-4ky0.onrender.com/users"
const PRODUCT_URL = 'https://server-4ky0.onrender.com/products';

export const getAllProducts =  () => {
    return  axios.get(`${PRODUCT_URL}`);

};

export const getProductById =  (ProductId) => {
    return  axios.get(`${PRODUCT_URL}/${ProductId}`);
};

export const updateCart = async (userId,cartData) => {
    return axios.put(`${USER_URL}/${userId}`,cartData);
}