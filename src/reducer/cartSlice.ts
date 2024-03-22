import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  id: number;
  cartName: string;
}

interface CartState {
  carts: Cart[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: CartState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<Cart>) {
      state.carts.push(action.payload);
    },
    removeCart(state, action: PayloadAction<number>) {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
