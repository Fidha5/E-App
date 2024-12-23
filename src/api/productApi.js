import axios from 'axios';

const USER_URL = "http://localhost:5000/users"
const PRODUCT_URL = 'http://localhost:5000/products';

export const getAllProducts =  () => {
    return  axios.get(`${PRODUCT_URL}`);

};

export const getProductById =  (ProductId) => {
    return  axios.get(`${PRODUCT_URL}/${ProductId}`);
};

export const updateCart = async (userId,cartData) => {
    return axios.put(`${USER_URL}/${userId}`,cartData);
}