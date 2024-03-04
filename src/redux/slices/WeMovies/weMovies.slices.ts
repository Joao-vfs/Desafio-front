import { createSlice } from "@reduxjs/toolkit";

import { IWeMoviesStateProps } from "@/interfaces/IWeMoviesState.interface";

const initialState = {
  weMovies: {
    filmsSelected: [],
  },
} as IWeMoviesStateProps;

export const WeMoviesSlice = createSlice({
  name: "weMovies",
  initialState,
  reducers: {
    handleFilmsSelected: (state, action) => {
      state.weMovies.filmsSelected = action.payload;
    },
  },
});

export const { handleFilmsSelected } = WeMoviesSlice.actions;

export default WeMoviesSlice.reducer;
