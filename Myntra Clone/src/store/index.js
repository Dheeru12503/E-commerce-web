import { configureStore, createSlice } from "@reduxjs/toolkit";
// this slice for counter of cart
const BagCounter = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    increment: (state, action) => {
      state.push(action.payload);
    },
    decrement: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

// this sclice for bagitems
const BagItems = createSlice({
  name: "ItemData",
  initialState: [],
  reducers: {
    initialItems: (state, action) => {
      return action.payload;
    },
  },
});

const myntraStore = configureStore({
  reducer: {
    counter: BagCounter.reducer,
    ItemData: BagItems.reducer,
  },
});

export const BagItemsActions = BagItems.actions;
export const BagCounterActions = BagCounter.actions;

export default myntraStore;
