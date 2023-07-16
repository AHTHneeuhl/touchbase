import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const outreach = createSlice({
  name: "outreach",
  initialState,
  reducers: {},
});

export default outreach.reducer;
