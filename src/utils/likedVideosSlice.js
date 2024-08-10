import { createSlice } from "@reduxjs/toolkit";

const likedVideosSlice = createSlice({
  name: "likedVideos",
  initialState: [],
  reducers: {
    likeVideo: (state, action) => {
      // Returning a new array with the existing state and the new video
      return [...state, action.payload];
    },
    unlikeVideo: (state, action) => {
      // Returning a new array excluding the unliked video
      return state.filter((video) => video.id !== action.payload.id);
    },
  },
});

export const { likeVideo, unlikeVideo } = likedVideosSlice.actions;
export default likedVideosSlice.reducer;
