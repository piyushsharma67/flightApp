import { createAsyncThunk } from "@reduxjs/toolkit";

type requestOtpResponse = {
    data: any,
    error?: any
}

function requestOtp(mobile: string): Promise<requestOtpResponse> {   // simulating the API response
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: true,
                error: null
            })
        }, 1500)
    })
}

export const requestOtpThunk = createAsyncThunk(
    "/requestOtpThunk",
    async (mobile: string, thunkAPI) => {
        try {
            const { data, error } = await requestOtp(mobile)   //simulating an api call for requesting the otp

            if (error) {
                throw new Error(error)
            }
            return data
        } catch (error: any) {
            thunkAPI.rejectWithValue(error)
        }
    }
);

type ValidateOtpThunkBody = {
    mobile: string,
    otp: string
}

type validateOtpResponse = {
    data: any,
    error?: any
}

function validateOtp({ mobile, otp }: { mobile: string, otp: string }): Promise<validateOtpResponse> {   //simulating the API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: "Iron Man",
                    email: "ironman@avengers.co",
                    token: "dsdsdsadsadsadsdsadsadasdsdasdsd"
                },
                error: null
            })
        }, 1500)
    })
}


export const validateOtpThunk = createAsyncThunk(
    "/validateOtpThunk",
    async (body: ValidateOtpThunkBody, thunkAPI) => {
        try {
            const { data, error } = await validateOtp(body)   //simulating an api call for validating the otp

            if (error) {
                throw new Error(error)
            }
            return data
        } catch (error: any) {
            thunkAPI.rejectWithValue(error)
        }
    }
);