import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@src/components/counterSlice";
import cartReducer from "@src/reducer/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
