import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
  },
  reducers: {
    inititalProductList(state, action) {
      return { ...state, productList: action.payload };
    },

    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (product) => product.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
  },
});

export const { inititalProductList, add, remove } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
