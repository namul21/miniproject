import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMovieListById = createAsyncThunk(
  "movie/fetchMovieListById",
  async (movieListId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieListId}?api_key=YOUR_API_KEY`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
