import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'wish',
  initialState: {
    wishProductIds: []
  },
  reducers: {
    addToWish(state, action){
      state.wishProductIds = [...state.wishProductIds, action.payload];
      console.log(action.payload);
    },
    removeFromWish(state, action){
      const indexOfId = state.wishProductIds.indexOf(action.payload);
      state.wishProductIds.splice(indexOfId, 1);
      console.log(action.payload);
    },
    clearWish(state){
      state.wishProductIds = [];
    }
  }
})

export const {addToWish, removeFromWish, clearWish} = user.actions;
export default user;