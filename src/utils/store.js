import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";
import likedVideosReducer from "./likedVideosSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    likedVideos: likedVideosReducer,
  },
});

export default store;
