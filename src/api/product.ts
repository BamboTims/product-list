import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  console.log(response.data.products)
  return response.data.products;
};
