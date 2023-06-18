import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, status: "'In Transit'" },
  { id: 1, status: "'Shipped'" },
  { id: 2, status: "'Delivered'" },
];

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
});

export const allStatusOptions = (state) => state.status;

export default statusSlice.reducer;
