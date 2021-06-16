import axios from 'axios';

const closeTabletUrl    = "https://pma-restaurant/closeTablet";
const sendOrderUrl      = "https://pma-restaurant/sendOrder";
const setNewPriceUrl    = "https://pma-restaurant/setNewPrice";
const deleteOrderUrl    = "https://pma-restaurant/deleteOrder";
const cookOrderUrl      = "https://pma-restaurant/cookOrder";

export const closeTablet = () => {
    return axios.post(closeTabletUrl, {})
}

export const sendOrder = (cart, customer, cost) => {
    return axios.post(sendOrderUrl, {cart, customer, cost})
}

export const setNewPrice = (item, price) => {
    return axios.post(setNewPriceUrl, {item, price})
}

export const deleteOrder = (order) => {
    return axios.post(deleteOrderUrl, {order})
}

export const cookOrder = (order) => {
    return axios.post(cookOrderUrl, {order})
}