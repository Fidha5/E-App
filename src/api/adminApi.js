import axios from "axios";

const USER_URL = "http://localhost:5000/users";
const ORDER_URL = "http://localhost:5000/orders";
const PRODUCT_URL = "http://localhost:5000/products";

export const getAllUsers = async () => {
    return await axios.get(USER_URL);
    
}

export const getAllOrders = async () => {
    return await axios.get(ORDER_URL);
    
}

export const addProduct = async (product) => {
    return await axios.post(PRODUCT_URL,product);
}


export const editProduct = async (id,product) => {
    return await axios.put(`${PRODUCT_URL}/${id}`,product);
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${PRODUCT_URL}/${id}`);
}

export const updateUser =async (id,block) => {
    return await axios.patch(`${USER_URL}/${id}`,block)
}