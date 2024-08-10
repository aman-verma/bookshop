import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    initialProductList: [],
    productList: [],
    filters: {
      onlyInStock: false,
      bestSellerOnly: false,
      sortBy: null,
      ratings: null,
    },
  },
  reducers: {
    initialProductList(state, action) {
      state.initialProductList = action.payload;
      state.productList = action.payload;
    },
    inStock(state, action) {
      state.filters.onlyInStock = action.payload;
      state.productList = applyFilters(state);
    },
    bestSeller(state, action) {
      state.filters.bestSellerOnly = action.payload;
      state.productList = applyFilters(state);
    },
    sorts(state, action) {
      state.filters.sortBy = action.payload;
      state.productList = applyFilters(state);
    },
    rating(state, action) {
      state.filters.ratings = action.payload;
      state.productList = applyFilters(state);
    },
  },
});

const applyFilters = (state) => {
  let filteredList = [...state.initialProductList];

  // Filter by in stock
  if (state.filters.onlyInStock) {
    filteredList = filteredList.filter((product) => product.in_stock);
  }

  // Filter by best seller
  if (state.filters.bestSellerOnly) {
    filteredList = filteredList.filter((product) => product.best_seller);
  }

  // Filter by ratings
  if (state.filters.ratings) {
    const ratingThreshold = Number(state.filters.ratings[0]); // '4STARSABOVE' -> 4
    filteredList = filteredList.filter(
      (product) => product.rating >= ratingThreshold
    );
  }

  // Sort by price
  if (state.filters.sortBy === 'lowtohigh') {
    filteredList.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (state.filters.sortBy === 'hoghtolow') {
    filteredList.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return filteredList;
};

export const { initialProductList, inStock, bestSeller, sorts, rating } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
