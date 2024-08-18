import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";
import likedVideosReducer from "./likedVideosSlice";
import darkModeReducer from "./darkModeSlice"; // Correct import for darkMode reducer

const store = configureStore({
  reducer: {
    app: appReducer,
    likedVideos: likedVideosReducer,
    darkMode: darkModeReducer, // Ensure this matches the name of your reducer
  },
});

export default store;
