import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AddBlog = createAsyncThunk("newblog", async (input) => {
    const token = window.sessionStorage.getItem("token")
    const config = {
        headers: { authorization: token }
    }
    console.log(token)
    // const navigate = useNavigate()
   const responce =  await axios.post("https://blog-app-backend-36zq.onrender.com/api/v1/posts", input, config)
    return responce.json()
})
const NewBlogSlice = createSlice({
    name: "newblog",
    initialState: {
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(AddBlog.pending, (state, action) => {
            console.log("pending....")
        })
        builder.addCase(AddBlog.fulfilled, (state, action) => {
            state.data = action.payload
            console.log("fulfill")
        })
        builder.addCase(AddBlog.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})
export default NewBlogSlice.reducer
