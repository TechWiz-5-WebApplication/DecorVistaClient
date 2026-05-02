import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  currentProduct: null,
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    }
  }
});

export const { 
  fetchProductsStart, 
  fetchProductsSuccess, 
  fetchProductsFailure, 
  setCurrentProduct 
} = productSlice.actions;
export default productSlice.reducer;
