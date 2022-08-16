import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "./movies/movieSlice";

export const store = configureStore({
    reducer: {
        movies: movieSliceReducer,
    }
});