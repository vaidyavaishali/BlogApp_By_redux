import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeData = createAsyncThunk("homedata/fetchHomeData", async () => {
  const token = window.sessionStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
// console.log(token)
  try {
    const response = await axios.get("https://blog-app-backend-36zq.onrender.com/api/v1/posts", config);
    // console.log(response.data)
    // console.log(r)
    // console.log(response.data.status)
    return response.data.users;

  } catch (error) {
    console.log(error);
    throw error;
  }
});



const homeDataSlice = createSlice({
  name: "homedata",
  initialState: {
    data:null,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      console.log("pending...");
    });
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log(action.payload)
      console.log("fulfilled");
    });
    builder.addCase(fetchHomeData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default homeDataSlice.reducer;
