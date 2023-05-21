import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const RegisterData = createAsyncThunk("registerData", async (regData) => {
    await axios.post("https://blog-app-backend-36zq.onrender.com/api/v1/register", regData).then((res) => {
        return res.json()

    }).catch((e) => {
        return e
    })
})


const registerSlice = createSlice({
    name: "register",
    initialState: {
        registerdata: [],
        error_register: null
    },
    extraReducers: (builder) => {
        builder.addCase(RegisterData.pending, (state, action) => {
            console.log("register pending")
        });
        builder.addCase(RegisterData.fulfilled, (state, action) => {
            state.registerdata.push(action.payload)
        });

        builder.addCase(RegisterData.rejected, (state, action) => {
            state.error_register = action.payload
        });

    }
})
export default registerSlice.reducer;
