import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
export const LoginData = createAsyncThunk("login", async (loginData) => {
    // const navigate = useNavigate()
    // console.log("k")

    await axios.post("https://blog-app-backend-36zq.onrender.com/api/v1/login", loginData).then(res => {
        // console.log("ok")
        // console.log(res.status)
        if (res.status === 200) {
            console.log(res.data)
            window.sessionStorage.setItem("token", res.data.token)
            console.log(res.data.token)
        }
    }).catch(e => {
        console.log(e)
    })
})

const loginSlice = createSlice({
    name: "login",
    initialState: {
        data:null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(LoginData.pending, (state, action) => {
            console.log("pending")
        })
        builder.addCase(LoginData.fulfilled, (state, action) => {
            state.data = (action.payload)
        })
        builder.addCase(LoginData.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})
export default loginSlice.reducer




