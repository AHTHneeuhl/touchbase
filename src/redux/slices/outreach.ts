import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  outreachDrafts: false,
};

export const outreach = createSlice({
  name: "outreach",
  initialState,
  reducers: {
    setOutreachDrafts: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        outreachDrafts: action.payload,
      };
    },
  },
});

export const { setOutreachDrafts } = outreach.actions;

export default outreach.reducer;
