import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartList: [], total: 0 },
  reducers: {
    addToCart(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
    removeFromCart(state, action) {
      const updatedCartList = state.cartList.filter(
        (product) => product.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
    clearCart(state, action) {
      return { ...state, cartList: [], total: 0 };
    },
  },
});

export const { cartList, total, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
