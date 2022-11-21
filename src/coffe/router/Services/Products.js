import axios from "axios";

export const getProduct = async () => {
    const { data } = await axios.request({
        method: 'get',
        url: 'https://restserver-devjose.herokuapp.com/api/products/getProducts'
    })

    return data.products
} 