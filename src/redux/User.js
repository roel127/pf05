// import { createSlice } from '@reduxjs/toolkit';

// const user = createSlice({
//   name: 'wish',
//   initialState: {
//     wishProductIds: []
//   },
//   reducers: {
//     addToWish(state, action){
//       state.wishProductIds = [...state.wishProductIds, action.payload];
//     },
//     removeFromWish(state, action){
//       const indexOfId = state.wishProductIds.indexOf(action.payload);
//       state.wishProductIds.splice(indexOfId, 1);
//     },
//     clearWish(state){
//       state.wishProductIds = [];
//     }
//   }
// })

// export const {addToWish, removeFromWish, clearWish} = user.actions;
// export default user;


import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'wish',
  initialState: {
    wishProductIds: []
  },
  reducers: {
    addToWish(state, action){
      const add = {
        id: action.payload,
        times: new Date().getTime()
      }
      state.wishProductIds = [...state.wishProductIds, add];
    },
    removeFromWish(state, action){
      const indexOfId = state.wishProductIds.findIndex(item=>item.id === action.payload);
      console.log(indexOfId);
      state.wishProductIds.splice(indexOfId, 1);
    },
    clearWish(state){
      state.wishProductIds = [];
    }
  }
})

export const {addToWish, removeFromWish, clearWish} = user.actions;
export default user;