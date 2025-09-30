import { createSlice } from "@reduxjs/toolkit";

type SaleState = {
  saleEnded: boolean;
};

const initialState: SaleState = {
  saleEnded: false,
};

const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSaleEnded: (state, action) => {
      state.saleEnded = action.payload;
    },
  },
});

export const { setSaleEnded } = global.actions;
export default global.reducer;
