import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "slice",
  initialState: {
    cardView: true,
    listView: false,
    newCustomer: false,
  },
  reducers: {
    update: (state, action) => {
      state.cardView = action.payload.cardView;
      state.listView = action.payload.listView;
      state.newCustomer = action.payload.newCustomer;
    },
  },
});
export const { update } = slice.actions;
export default slice.reducer;
