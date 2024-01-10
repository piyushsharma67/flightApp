import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFlightsList = createAsyncThunk(
    "/fetchFlightsList",
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://api.npoint.io/4829d4ab0e96bfab50e7')   //simulating an api call for requesting the otp

            const data = await response.json()
            return data.data.result
        } catch (error: any) {
            thunkAPI.rejectWithValue(error)
        }
    }
);

function fetchFlightsBetweenSearchAndDest(): Promise<any> {   // simulating the API response
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: true,
                error: null
            })
        }, 1500)
    })
}

export const fetchFlightsBetweenSearchAndDestThunk = createAsyncThunk(
    "/fetchFlightsBetweenSearchAndDestThunk",
    async (_, thunkAPI) => {
        try {
            const response = await fetchFlightsBetweenSearchAndDest()   //simulating an api call for requesting the otp

            const data = await response.json()
            return data
        } catch (error: any) {
            thunkAPI.rejectWithValue(error)
        }
    }
);

