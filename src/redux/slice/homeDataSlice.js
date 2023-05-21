import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeData = createAsyncThunk("homedata/fetchHomeData", async () => {
  const token = window.sessionStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };

  try {
    const response = await axios.get("https://blog-app-backend-36zq.onrender.com/api/v1/posts", config);
    console.log(response)
    return response.data;

  } catch (error) {
    console.log(error);
    throw error;
  }
});

const homeDataSlice = createSlice({
  name: "homedata",
  initialState: {
    data: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      console.log("pending...");
    });
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.data.push(action.payload);
      // console.log(action.payload)
      console.log("fulfilled");
    });
    builder.addCase(fetchHomeData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default homeDataSlice.reducer;
