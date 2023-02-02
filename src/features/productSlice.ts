import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCart } from "../interfaces";

const initialState = {
  currentSale: [] as IProductCart[],
  amount: 0,
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IProductCart>) => {
      const productExist = state.currentSale.find((item) => {
        return item.id === action.payload.id;
      });

      if (productExist) {
        const itemsCart = state.currentSale.find(
          (item) => item.id === action.payload.id
        );
        itemsCart!.amount = itemsCart?.amount + 1;
      } else {
        state.currentSale.push({ ...action.payload, amount: 1 });
      }
    },

    removeCard: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.currentSale = state.currentSale.filter(
        (item) => item.id !== itemId
      );
    },
    increase: (state, { payload }) => {
      const itemsCart = state.currentSale.find((item) => item.id === payload);
      itemsCart!.amount = itemsCart?.amount + 1;
    },
    decrease: (state, { payload }) => {
      const itemsCart = state.currentSale.find((item) => item.id === payload);
      itemsCart!.amount = itemsCart?.amount - 1;
    },
    totalValue: (state) => {
      let amount = 0;
      let total = 0;
      state.currentSale.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addCart, removeCard, increase, decrease, totalValue } =
  productSlice.actions;

export default productSlice.reducer;
