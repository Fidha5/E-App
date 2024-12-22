import axios from "axios";

const USER_URL = "http://localhost:5000/users";
const ORDER_URL = "http://localhost:5000/order";



export const userCheck = async (email,password) => {
    const res = await axios.get(`${USER_URL}?email=${email}&password=${password}`);
    console.log(res.data);
    return res.data;
}

export const emailCheck = async (email) => {
    const res = await axios.get(`${USER_URL}?email=${email}`);
    return res.data.length>0;
}

export const addUser = async (userData) => {
    const res = await axios.post(USER_URL,userData);
    return res.data;
}

export const getUserbyId = async (userId) => {
    const res = await axios.get(`${USER_URL}/${userId}`)
    return res.data;
}

export const OrdersByUserId = async (userId) => {
    const res = await axios.get(`${ORDER_URL}?userId=${userId}`);
    return res.data;
}

export const addOrder = async (orderData) => {
    const res = await axios.post(ORDER_URL,orderData);
    return res.data;
}