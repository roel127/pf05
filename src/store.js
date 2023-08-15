import { configureStore } from "@reduxjs/toolkit";
import user from "./redux/User";

const store = configureStore({
  reducer:{
    wish: user.reducer
  }
})

export default store;