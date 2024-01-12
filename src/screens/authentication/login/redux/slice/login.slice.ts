import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { requestOtpThunk, validateOtpThunk } from "../thunk/login.thunk"

const initialState = {
    profile: {
        name: "",
        email: "",
        token: ""
    },
    loading: false,
    error: "",
    otpSent: false,
    screenState: {
        mobile: "",
        otp: "",
    }
}

const LoginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        setMobile: (state, action: PayloadAction<string>) => {
            state.screenState.mobile = action.payload
        },
        setOtp: (state, action: PayloadAction<string>) => {
            state.screenState.otp = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(requestOtpThunk.pending, (state) => {
            state.loading = true
        })
        builder.addCase(requestOtpThunk.fulfilled, (state, action) => {
            state.loading = false
            state.otpSent = true
        })
        builder.addCase(requestOtpThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload!! as string
            setTimeout(() => {
                state.error = ""
            }, 1500)
        })
        builder.addCase(validateOtpThunk.pending, (state) => {
            state.loading = true
        })
        builder.addCase(validateOtpThunk.fulfilled, (state, action) => {
            state.loading = false
            state.profile = action.payload
        })
        builder.addCase(validateOtpThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload!! as string
            setTimeout(() => {
                state.error = ""
            }, 1500)
        })
    },

})
export const loginSliceActions = { ...LoginSlice.actions }
export default LoginSlice.reducer