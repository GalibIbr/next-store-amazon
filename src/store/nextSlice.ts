import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";

interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const existingProducts = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProducts) {
        existingProducts.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const existingProducts = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProducts) {
        existingProducts.quantity += action.payload.quantity;
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProducts = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      existingProducts && existingProducts.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProducts = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProducts?.quantity === 1) {
        existingProducts.quantity = 1;
      } else {
        existingProducts!.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {
  addToCard,
  addToFavorite,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  removeUser,
  setAllProducts,
} = nextSlice.actions;
export default nextSlice.reducer;
