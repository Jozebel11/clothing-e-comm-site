import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
      console.log(state.items)
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.productID === action.payload.productID);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1)

      }else{
        console.warn(`Cant remove product (id: ${action.payload.productID}) as its not in the basket`)
      }
      state.items = newBasket
    },
  },
});


export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => Number(total) + Number(item.priced), 0)

export default basketSlice.reducer;


