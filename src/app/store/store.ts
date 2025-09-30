import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";

export const store = configureStore({
  reducer: {
    sale: globalReducer,
  },
});

// Inferred types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
