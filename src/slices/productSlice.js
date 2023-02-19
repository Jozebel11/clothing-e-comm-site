import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productPageSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      addToProductPage: (state, action) => {
        const productPageItem = state.items.length
        if(productPageItem < 1)
        state.items = [...state.items, action.payload]
      },
      removeFromProductPage: (state, action) => {
        const index = state.items.findIndex(productItem => productItem.id === action.payload.id);
        let clearProductPage = [...state.items];
        if (index >= 0) {
          clearProductPage.splice(index, 1)
  
        }else{
          console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the basket`)
        }
        state.items = clearProductPage
      },
    },
  });

  export const { addToProductPage, removeFromProductPage } = productPageSlice.actions;

  export const selectProduct = (state) => state.basket.items;

  export default productPageSlice.reducer;