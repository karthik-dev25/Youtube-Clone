import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},
    videos: [],
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cache = { ...state.cache, ...action.payload };
    },
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { cacheResults, addVideos } = searchSlice.actions;

export default searchSlice.reducer;
