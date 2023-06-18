import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

/* import { ShipmentsData } from "../../../MOCK_DATA/shipments_data";
const initialState = { orders: ShipmentsData }; */

const initialState = {
  orders: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

//Get all orders 
export const getOrders = createAsyncThunk("orders/getAll", async (ordersData, thunkAPI) => {
  try {
    return await orderService.getOrders(ordersData);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },

    updateOrder: (state, action) => {
      state.orders.map((order) => {
        if (order.orderNo === action.payload.orderNo) {
          order.date = action.payload.date;
          order.customer = action.payload.customer;
          order.trackingNo = action.payload.trackingNo;
          order.status = action.payload.status;
          order.consignee = action.payload.consignee;
        }
        return order;
      });
    },
    deleteOrder: (state, action) => {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.orderNo !== orderId);
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { addOrder, updateOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
