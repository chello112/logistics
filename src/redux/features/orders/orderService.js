import axios from "axios";

//Get orders
const getOrders = async () => {
  const response = await axios.get(process.env.REACT_APP_ORDERS_URL);

  return response.data;
};

const orderService = {
  getOrders,
};

export default orderService;
